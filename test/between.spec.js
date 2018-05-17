import './polyfill';
import test from 'ava';
import between from '../src/between.js';

test.cb('single values', t => {
  t.plan(1);

  between(1, 2).time(1000).on('complete', v => {
	  t.is(v, 2);
    t.end();
  })
});

test.cb('array as a value', t => {
  t.plan(1);

  between([1, 2], [3, 4]).time(1000).on('complete', v => {
	  t.deepEqual(v, [3, 4]);
    t.end();
  })
});
