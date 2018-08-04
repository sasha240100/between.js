import {Between as TypedBetween, Easing} from './between';
import Between from '../src/between'; // importing this thing to test passing some easing functions

// Test constructor
const between = new TypedBetween(1, 10);

// Test time
between.time(100);

// Test loop
between.loop("repeat", 1);
between.loop("bounce");

// Test easing
between.easing(Between.Easing.Cubic.InOut);

// Test events
between.on('start', (value) => { value });
between.on('update', (value) => { value });
between.on('complete', (value) => { value });

// Test chained
between.time(1000)
  .loop("repeat")
  .easing(Between.Easing.Linear.In)
  .on('complete', (value) => { value });