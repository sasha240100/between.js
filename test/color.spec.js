import './polyfill';
import test from 'ava';
import color from 'color';
import Between from '../src/between';

Between._plugins.color = require('../plugins/dom-color').default;

test.cb('is working with non-strings', t => {
  t.plan(1);

  new Between(1, 10)
    .time(1000)
    .on('complete', () => {
      t.pass();
      t.end();
    });
});

test.cb('is color plugin converts from rgb to rgb', t => {
  t.plan(1);

  new Between('rgb(0, 0, 0)', 'rgb(255, 0, 0)')
    .time(1000)
    .on('complete', v => {
      t.deepEqual(color(v).rgb().color, color('rgb(255, 0, 0)').rgb().color);
      t.end();
    });
});

test.cb('is color plugin converts from hex to rgb', t => {
  t.plan(1);

  new Between('#00ff00', 'rgb(255, 0, 0)')
    .time(1000)
    .on('complete', v => {
      t.deepEqual(color(v).rgb().color, color('rgb(255, 0, 0)').rgb().color);
      t.end();
    });
});

test.cb('is color plugin converts from rgba to rgb', t => {
  t.plan(1);

  new Between('rgba(255, 0, 0, 0.7)', 'rgb(255, 0, 0)')
    .time(1000)
    .on('complete', v => {
      t.deepEqual(color(v).rgb().color, color('rgba(255, 0, 0)').rgb().color);
      t.end();
    });
});

test.cb('is color plugin converts from hsl to rgb', t => {
  t.plan(1);

  new Between('hsl(120, 50%, 0%)', 'rgb(255, 0, 0)')
    .time(1000)
    .on('complete', v => {
      t.deepEqual(color(v).rgb().color, color('rgb(255, 0, 0)').rgb().color);
      t.end();
    });
});

test.cb('is color plugin converts from color name to rgb', t => {
  t.plan(1);

  new Between('white', 'rgb(255, 0, 0)')
    .time(1000)
    .on('complete', v => {
      t.deepEqual(color(v).rgb().color, color('rgb(255, 0, 0)').rgb().color);
      t.end();
    });
});
