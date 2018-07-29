import './polyfill';
import test from 'ava';
import Between from '../src/between';

Between._plugins.color = require('../plugins/dom-color').default;

test.cb('is color plugin works', t => {
  t.plan(1);

  new Between('#00ff00', 'rgb(255, 0, 0)')
    .time(1000)
    .on('update', (v, {localTime}, {destValue}) => {
      if (localTime === 1000) {
        t.deepEqual(v, destValue);
        t.end();
      }
    });
});
