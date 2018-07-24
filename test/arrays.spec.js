import './polyfill';
import test from 'ava';
import Between from '../src/between';

test.cb('array as a value', t => {
  t.plan(1);

  new Between(
    [1, 2], // from
    [3, 4] // to
  )
    .time(1000)
    .on('complete', v => {
      t.deepEqual(v, [3, 4]);
      t.end();
    });
});
