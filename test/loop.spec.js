import './polyfill';
import test from 'ava';
import Between from '../src/between';

test.cb('repeat', t => {
  t.plan(1);

  new Between(1, 2)
    .time(1000)
    .loop('repeat', 3)
    .on('complete', v => {
      t.is(v, 2);
      t.end();
    });
});

test.cb('bounce', t => {
  t.plan(1);

  new Between(1, 2)
    .time(1000)
    .loop('bounce', 4)
    .on('complete', v => {
      t.is(v, 1);
      t.end();
    });
});
