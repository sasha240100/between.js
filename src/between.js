import Events from 'minivents';
import lerp from 'lerp';

const _betweens = [];

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

const SYMBOL_TYPE = Symbol('type');
const SYMBOL_COMPLETED = Symbol('completed');

class Between extends Events {
  constructor(startValue, destValue) {
    super();

    const type = typeof startValue === 'object' ? (Array.isArray(startValue) ? 'array' : 'object') : 'number';

    Object.assign(this, {
      duration: null,
      localTime: 0,
      startValue,
      destValue,
      value: type === 'array' ? [].concat(startValue) : startValue,
      [SYMBOL_COMPLETED]: false,
      [SYMBOL_TYPE]: type
    });

    _betweens.push(this);
  }

  time(duration) {
    this.duration = duration;
    return this;
  }

  update(delta) {
    if (this.localTime === 0)
      this.emit('start');

    const progress = Math.min(1, this.localTime / this.duration);

    switch (this[SYMBOL_TYPE]) {
      case 'array':
        for (let i = 0; i < this.value.length; i++)
          this.value[i] = lerp(this.startValue[i], this.destValue[i], progress);
        break;
      case 'object':
        // FIXME: Unimplemented.
        break;
      case 'number':
      default:
        this.value = lerp(this.startValue, this.destValue, progress);
        break;
    }

    this.emit('update', this.value, this);

    if (progress >= 1) {
      this[SYMBOL_COMPLETED] = true;
      this.emit('complete');
    }

    this.localTime += delta;
  }
}

export default function (...args) {
  return new Between(...args);
}
