import Events from 'minivents';
import lerp from 'lerp';

const _betweens = [];

let _prevTime = Date.now(), _time, _delta;
(function _update() {
  requestAnimationFrame(_update);

  _time = Date.now();
  _delta = _time - _prevTime;

  for (let i = 0; i < _betweens.length; i++) {
    if (!_betweens[i].completed)
      _betweens[i].update(_delta);
  }

  _prevTime = _time;
})();

class Between extends Events {
  constructor(startValue, destValue) {
    super();

    Object.assign(this, {
      duration: null,
      localTime: 0,
      startValue,
      destValue,
      value: startValue,
      completed: false
    });

    _betweens.push(this);
  }

  time(duration) {
    this.duration = duration;
    return this;
  }

  update(delta) {
    this.localTime += delta;

    const progress = Math.min(1, this.localTime / this.duration);

    this.value = lerp(this.startValue, this.destValue, progress);
    this.emit('update', this.value);

    if (progress >= 1) {
      this.completed = true;
      this.emit('complete');
    }
  }
}

export default function (...args) {
  return new Between(...args);
}
