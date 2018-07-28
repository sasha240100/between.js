import Events from 'minivents';
import lerp from 'lerp';
import Easing from 'easing-functions';
import Color from 'color';

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

    const middleware = this.middleware = Object.values(Between._middleware).reduce((v, m) => {
      return v || (m && m.test && m.test(startValue) && m);
    }, false);

    const type = (middleware && middleware.name) || (typeof startValue === 'object' ? (Array.isArray(startValue) ? 'array' : 'object') : 'number');

    const result = middleware.initialize(startValue, destValue);

    startValue = result.startValue;
    destValue = result.destValue;
    this.data = result.data;

    // const toInterpolate = this.middleware.interpolate(startValue, destValue, Math.min(1, 0 / 1000), data)

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
        this.value = this.middleware.interpolate(this.startValue, this.destValue, progress, this.data);
    }

    // console.log(this.value)

    this.emit('update', this.value, this);

    if (progress >= 1) {
      this[SYMBOL_COMPLETED] = true;
      this.emit('complete', this.value, this);
    }

    this.localTime += delta;
  }
}

Between.Easing = Easing;
Between._middleware = {};
// middleware code
Between._middleware.color = {
  name: 'color',
  test(startValue) { // rgb(255, 0, 0)
    return startValue.indexOf('rgb') >= 0 || startValue.indexOf('#') >= 0 || startValue.indexOf('hsl') >= 0; // true
  },
  initialize(startValue, destValue) {
    if (Color(startValue).model === 'hsl') {
      return {
        data: {
          format: Color(startValue).model
        },
        startValue: Color(startValue).hsl(),
        destValue: Color(destValue).hsl()
      }
    } else {
      if (startValue.indexOf('rgb') >= 0) {
        if(Color(startValue).valpha != 1 || Color(destValue).valpha != 1) {
          return {
            data: {
              format: 'rgba'
            },
            startValue: Color(startValue),
            destValue: Color(destValue)
          }
        } else {
          return {
            data: {
              format: 'rgb'
            },
            startValue: Color(startValue),
            destValue: Color(destValue)
          }
        }
      } else if (startValue.indexOf('#') >= 0) {
        return {
          data: {
            format: 'hex'
          },
          startValue: Color(startValue).rgb(),
          destValue: Color(destValue).rgb()
        }
      }
    }
  },
  
  interpolate(startValue, destValue, progress, data) {
    const r = lerp(startValue.color[0], destValue.color[0], progress);
    const g = lerp(startValue.color[1], destValue.color[1], progress);
    const b = lerp(startValue.color[2], destValue.color[2], progress);

    if (data.format === 'rgba') {
      const a = lerp(startValue.valpha, destValue.valpha, progress)
      return `rgba(${r.toFixed()}, ${g.toFixed()}, ${b.toFixed()}, ${a})`
    }

    if (data.format === 'hex')
      return Color(`rgb(${r.toFixed()}, ${g.toFixed()}, ${b.toFixed()})`).hex()

    if (data.format === 'rgb')
      return `rgb(${r.toFixed()}, ${g.toFixed()}, ${b.toFixed()})`

    if (data.format === 'hsl')
      return `hsl(${r.toFixed()}, ${g.toFixed()}%, ${b.toFixed()}%)`

    return toReturnTwo.color;
  }
};
