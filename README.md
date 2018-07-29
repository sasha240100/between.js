---
description: Powerful JavaScript twening library.
---

# between.js

* [Purpose](./#purpose)
* [Installation](./#install-with-npm)
* [Basic usage](./#basic-usage)
* [Events](./#events)
* [Different values](./#different-values)
* [Looping](./#looping)
* [Easing](./#easing)
* [Color](./#color)
* [Mixed examples](./#mixed-examples)

## Purpose

Make twining usage convenient and powerful.

## Install with npm 

```
$ npm install between.js
```

## Basic usage

```javascript
import between from 'between.js';

new Between(1, 10).time(1000)
  .on('update', (value) => {
      console.log(value);
  });
```

[Codepen](http://google.com)

## Events

```javascript
import between from 'between.js';

new Between(1, 10).time(1000)
  .on('update', (value) => {
      console.log(value); 
  })
  .on('start', (value) => {
      console.log(value);
  })
  .on('complete', (value) => {
      console.log(value);
  });
```

## Different values

* Numbers
* Arrays
* Objects

Numbers

```javascript
import between from 'between.js';

new Between(1, 10).time(1000)
  .on('update', (value) => {
      console.log(value);
  });
```

[Codepen](http://g.com)

Arrays

```javascript
import between from 'between.js';

new Between([1, 5], [10, 10]).time(1000)
  .on('update', (value) => {
      console.log(value);
   });
```

[Codepen](http://google.com)

Objects

```javascript
import between from 'between.js';

new Between({x: 2, y: 3, z: 4}, {x: 4, y: 6, z: 10}).time(1000)
  .on('update', (value) => {
      console.log(value);
  });
```

[Codepen](http://google.com)

## Looping

Repeat `N` times

```javascript
import between from 'between.js';

new Between(1, 10).time(4000)
  .loop('repeat', N)
  .on('update', (value, {times}) => {
      console.log(value);
      console.log(times);
  });
```

[Codepen](http://g.com)

Repeat endless

```javascript
import between from 'between.js';

new Between(1, 10).time(4000)
  .loop('repeat')
  .on('update', (value) => {
      console.log(value);
  });
```

[Codepen](http://g.com)

Bounce `N` times

```javascript
import between from 'between.js';

new Between(1, 10).time(4000)
  .loop('bounce', N)
  .on('update', (value, {times}) => {
      console.log(value);
      console.log(times);
  });
```

[Codepen](http://h.com)

## Easing

```javascript
import between from 'between.js';
import Easing from 'easing-functions';

// choose easing mode frome easing-functions

new Between(1, 10).time(4000)
  .easing(Between.Easing.Cubic.InOut)
  .on('update', (value) => {
      console.log(value);
  });
```

[Codepen](http://g.com)

![](.gitbook/assets/screen-shot-2018-07-29-at-13.25.52.png)

[easing-functions npm](https://www.npmjs.com/package/easing-functions) 

## Color

Color types:

* HEX
* HSL
* RGB
* Words \(red, yellow...\)

```javascript
import between from 'between.js';

new Between('red', 'rgb(255,40,30)').time(4000)
  .on('update', (value) => {
      console.log(value);
  });
```

## Mixed examples

```javascript
import between from 'between.js';
import Easing from 'easing-functions';

// choose easing mode frome easing-functions

new Between('red', 'rgb(255,40,30)').time(4000)
  .loop('repeat', 3)
  .easing(Between.Easing.Linear)
  .on('update', (value) => {
      console.log(value);
  });
```

```javascript
import between from 'between.js';
import Easing from 'easing-functions';

// choose easing mode frome easing-functions

new Between(1, 10).time(4000)
  .loop('bounce', 3)
  .easing(Between.Easing.Cubic.InOut)
  .on('update', (value) => {
      console.log(value);
  });
```

```javascript
import between from 'between.js';
import Easing from 'easing-functions';

// choose easing mode frome easing-functions

new Between(1, 10).time(4000)
  .loop('repeat', 4)
  .easing(Between.Easing.Elastic.In)
  .on('update', (value) => {
      console.log(value);
  })
  .on('complete', (value) => {
      console.log(value);
  });
```

