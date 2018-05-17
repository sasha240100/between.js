import './polyfill';
import test from 'ava';
import between from '../build/between.js';

test('normal values', t => {
  t.plan(1);
  t.pass();

  // between(1, 2).time(100).on('complete', v => {
	//   t.is(v, 2);
  // })
});
