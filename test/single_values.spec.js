import './polyfill';
import test from 'ava';
import Between from '../src/between';

test.cb('single values', t => {
  t.plan(1);

  new Between(1, 2)
    .time(1000)
    .on('complete', v => {
      t.is(v, 2);
      t.end();
    });
});
