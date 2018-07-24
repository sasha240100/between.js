import './polyfill';
import test from 'ava';
import Between from '../src/between';

test.cb('is easing works', t => {
  t.plan(1);

  const easingFunc = Between.Easing.Bounce.In;

  new Between(0, 10)
    .time(1000)
    .easing(easingFunc)
    .on('update', (v, {localTime}) => {
      if (localTime > 500) {
        t.deepEqual(v, easingFunc(localTime / 1000) * 10);
        t.end();
      }
    });
});
