/* eslint no-multi-assign: 0 */
import Events from 'minivents';
import lerp from 'lerp';
import Easing from 'easing-functions';
import raf from 'raf';

const _betweens = [];

const SYMBOL_TYPE = Symbol('type');
const SYMBOL_START_TIME = Symbol('start_time');
const SYMBOL_COMPLETED = Symbol('completed');
const SYMBOL_PAUSED = Symbol('paused');

const _requestAnimationFrame = ( // polyfill
  requestAnimationFrame
  || raf
);

let _prevTime = Date.now(), _time, _delta;
(function _update() {
  _requestAnimationFrame(_update);

  _time = Date.now();
  _delta = _time - _prevTime;

  for (let i = 0; i < _betweens.length; i++) {
    if (!_betweens[i][SYMBOL_COMPLETED])
      _betweens[i](_delta, Date.now() - _betweens[i][SYMBOL_START_TIME]);
  }

  _prevTime = _time;
})();

export default class Between extends Events {
  static between(...args) {
    return new Between(...args);
  }

  static DEFAULT_LOOP = {
    complete: cb => cb(),
    progress: x => x
  };

  constructor(startValue, destValue) {
    super();

    const plugin = this.plugin = Object.values(Between._plugins).reduce((v, m) => {
      return v || (m && m.test && m.test(startValue) && m);
    }, false);

    const type = (plugin && plugin.name) || (typeof startValue === 'object' ? (Array.isArray(startValue) ? 'array' : 'object') : 'number');

    if (plugin) {
      const result = plugin.initialize(startValue, destValue);

      ({startValue, destValue} = result);
      this.data = result.data;
    }

    Object.assign(this, {
      duration: 1000,
      localTime: 0,
      startValue,
      destValue,
      loopMode: 'once',
      loopFunction: Between.DEFAULT_LOOP,
      ease: x => x,
      value: type === 'array'
        ? [].concat(startValue)
        : (
          type === 'object'
            ? Object.assign({}, startValue)
            : startValue
        ),
      [SYMBOL_COMPLETED]: false,
      [SYMBOL_TYPE]: type,
      [SYMBOL_START_TIME]: Date.now(),
      [SYMBOL_PAUSED]: false
    });

    switch (this[SYMBOL_TYPE]) {
      case 'number':
        this._updateValue = progress => {
          this.value = lerp(this.startValue, this.destValue, progress);
        };

        break;

      case 'array':
        {
          const _l = this.value.length;
          const {startValue: s, destValue: d, value: v} = this;

          this._updateValue = progress => {
            for (let i = 0; i < _l; i++)
              v[i] = lerp(s[i], d[i], progress);
          };
        }

        break;

      case 'object':
        {
          const keys = Object.keys(this.startValue);
          const _l = keys.length;

          const {startValue: s, destValue: d, value: v} = this;

          this._updateValue = progress => {
            for (let i = 0; i < _l; i++) {
              const key = keys[i];
              v[key] = lerp(s[key], d[key], progress);
            }
          };
        }

        break;

      default:
        if (this.plugin) {
          this._updateValue = progress => {
            this.value = this.plugin.interpolate(this.startValue, this.destValue, progress, this.data);
          };
        } else {
          console.warn('Between: startValue type was unrecognized.');
          this._updateValue = () => null;
        }
    }

    _betweens.push(this.update());
  }

  pause() {
    this[SYMBOL_PAUSED] = true;
    this.emit('pause', this.value, this, _delta);
    return this;
  }

  get isPaused() {
    return this[SYMBOL_PAUSED];
  }

  play() {
    this[SYMBOL_PAUSED] = false;
    this.emit('play', this.value, this, _delta);
    return this;
  }

  easing(easing) {
    this.ease = easing;
    return this;
  }

  time(duration) {
    this.duration = duration;
    return this;
  }

  loop(mode = 'once', ...args) {
    const loopFunctionName = `__loop_${mode}`;

    this.loopFunction = loopFunctionName in this
      ? Object.assign({}, Between.DEFAULT_LOOP, this[loopFunctionName](...args))
      : Between.DEFAULT_LOOP;

    return this;
  }

  __loop_repeat(times) {
    const maxTimes = times;
    this.times = 0;

    return {
      complete: callback => {
        this.localTime = 0;

        if (Number.isInteger(maxTimes) && ++this.times === maxTimes)
          callback();
        else if (!Number.isInteger(maxTimes))
          ++this.times;
      }
    };
  }

  __loop_bounce(times) {
    const maxTimes = times;
    let bounceDirection = 1;
    this.times = 0;

    return {
      complete: callback => {
        this.localTime = 0;
        bounceDirection = -bounceDirection;

        if (Number.isInteger(maxTimes) && ++this.times === maxTimes)
          callback();
        else if (!Number.isInteger(maxTimes))
          ++this.times;
      },
      progress: x => bounceDirection > 0 ? x : 1 - x
    };
  }

  update = () => {
    const {_updateValue} = this;

    return (delta, time) => {
      if (this[SYMBOL_COMPLETED] || this[SYMBOL_PAUSED]) return;

      if (this.localTime === 0)
        this.emit('start', this.value, this);

      _updateValue(this.ease( // progress
        this.loopFunction.progress(
          Math.min(1, (time || this.localTime) / this.duration)
        )
      ));

      this.emit('update', this.value, this, delta);

      if (this.localTime >= this.duration) {
        this.loopFunction.complete(() => {
          this[SYMBOL_COMPLETED] = true;
          this.emit('complete', this.value, this);
        });
      }

      this.localTime += delta;
    };
  }
}

Between.Easing = Easing;
Between._plugins = {};
