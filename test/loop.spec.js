import './polyfill';
import test from 'ava';
import Between from '../src/between';

test.cb('is \'repeat\' loop mode working (with N)', t => {
  t.plan(2);

  let count = 0;

  new Between(1, 2)
    .time(1000)
    .loop('repeat', 3)
    .on('update', v => {
      if (v === 2)
        count++;
    })
    .on('complete', (v, {times}) => {
      t.is(times, 3, 'ctx.times equals 3');
      t.is(count, 3, 'loop was executed 3 times');
      t.end();
    });
});

test.cb('is \'bounce\' loop mode working (with N)', t => {
  t.plan(3);

  let count = 0;

  new Between(1, 2)
    .time(1000)
    .loop('bounce', 4)
    .on('update', v => {
      if (v === 2) {
        count++;
      }
    })
    .on('complete', (v, {times}) => {
      t.is(times, 4, 'ctx.times equals 4');
      t.is(count, 2, 'loop was executed 2 times');
      t.is(v, 1, 'loop ended with value 1');
      t.end();
    });
});
