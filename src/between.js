import Events from 'minivents';
import lerp from 'lerp';
import Easing from 'easing-functions';

const _betweens = [];

const SYMBOL_TYPE = Symbol('type');
const SYMBOL_COMPLETED = Symbol('completed');

let _prevTime = Date.now(), _time, _delta;
(function _update() {
  requestAnimationFrame(_update);

  _time = Date.now();
  _delta = _time - _prevTime;

  for (let i = 0; i < _betweens.length; i++) {
    if (!_betweens[i][SYMBOL_COMPLETED])
      _betweens[i].update(_delta);
  }

  _prevTime = _time;
})();

export default class Between extends Events {
  static between(...args) {
    return new Between(...args);
  }

  constructor(startValue, destValue) {
    super();

    const plugin = this.plugin = Object.values(Between._plugins).reduce((v, m) => {
      return v || (m && m.test && m.test(startValue) && m);
    }, false);

    const type = (plugin && plugin.name) || (typeof startValue === 'object' ? (Array.isArray(startValue) ? 'array' : 'object') : 'number');

    const result = plugin.initialize(startValue, destValue);

    startValue = result.startValue;
    destValue = result.destValue;
    this.data = result.data;

    // const toInterpolate = this.plugins.interpolate(startValue, destValue, Math.min(1, 0 / 1000), data)

    Object.assign(this, {
      duration: 1000,
      localTime: 0,
      startValue,
      destValue,
      ease: x => x,
      value: type === 'array'
        ? [].concat(startValue)
        : (
          type === 'object'
            ? Object.assign({}, startValue)
            : startValue
        ),
      [SYMBOL_COMPLETED]: false,
      [SYMBOL_TYPE]: type
    });

    _betweens.push(this);
  }

  easing(easing) {
    this.ease = easing;
    return this;
  }

  time(duration) {
    this.duration = duration;
    return this;
  }

  update(delta)  {
    if (this.localTime === 0)
      this.emit('start');

    const progress = this.ease(Math.min(1, this.localTime / this.duration));

    switch (this[SYMBOL_TYPE]) {
      case 'array':
        for (let i = 0; i < this.value.length; i++)
          this.value[i] = lerp(this.startValue[i], this.destValue[i], progress);
        break;

      case 'object':
        for (const key in this.startValue) // eslint-disable-line
          this.value[key] = lerp(this.startValue[key], this.destValue[key], progress);
        break;

      case 'number':
        this.value = lerp(this.startValue, this.destValue, progress);
        break;

      default:
        this.value = this.plugin.interpolate(this.startValue, this.destValue, progress, this.data);
    }

    this.emit('update', this.value, this);

    if (progress >= 1) {
      this[SYMBOL_COMPLETED] = true;
      this.emit('complete', this.value, this);
    }

    this.localTime += delta;
  }
}

Between.Easing = Easing;
Between._plugins = {};
