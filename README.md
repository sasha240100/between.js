

<img src="https://i.imgur.com/0R4B416.png" height="100">

> Lightweight JavaScript (ES6) tweening library.

![](https://travis-ci.org/sasha240100/between.js.svg?branch=master)
![](https://img.shields.io/npm/v/between.js.svg)

**EXAMPLES**
* [Examples collection](http://betweenjs.surge.sh/)

**DOCUMENTATION**

* [Purpose](#purpose)
* [Installation](#install-with-npm)
* [Basic usage](#basic-usage)
* [Events](#events)
* [Different values](#different-values)
* [Looping](#looping)
* [Easing](#easing)
* [Color](#color)
* [Mixed examples](#mixed-examples)

## Purpose

Make twining usage convenient and powerful.

## Install with npm 

```
$ npm install between.js
```

## Basic usage

```javascript
import Between from 'between.js';

new Between(1, 10).time(1000)
  .on('update', (value) => {
      console.log(value);
  });
```


Or in HTML:

```html
<script src="./path/to/between.js"></script>
<script>
  new Between(1, 10).time(1000)
    .on('update', (value) => {
        console.log(value);
    });
</script>
```

## Events

```javascript
import Between from 'between.js';

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
import Between from 'between.js';

new Between(1, 10).time(1000)
  .on('update', (value) => {
      console.log(value);
  });
```

Arrays

```javascript
import Between from 'between.js';

new Between([1, 5], [10, 10]).time(1000)
  .on('update', (value) => {
      console.log(value);
   });
```


Objects

```javascript
import Between from 'between.js';

new Between({x: 2, y: 3, z: 4}, {x: 4, y: 6, z: 10}).time(1000)
  .on('update', (value) => {
      console.log(value);
  });
```


## Looping

Repeat `N` times

```javascript
import Between from 'between.js';

new Between(1, 10).time(4000)
  .loop('repeat', N)
  .on('update', (value, {times}) => {
      console.log(value);
      console.log(times);
  });
```



Repeat endless

```javascript
import Between from 'between.js';

new Between(1, 10).time(4000)
  .loop('repeat')
  .on('update', (value) => {
      console.log(value);
  });
```


Bounce `N` times

```javascript
import Between from 'between.js';

new Between(1, 10).time(4000)
  .loop('bounce', N)
  .on('update', (value, {times}) => {
      console.log(value);
      console.log(times);
  });
```


## Easing

```javascript
import Between from 'between.js';
import Easing from 'easing-functions';

// choose easing mode frome easing-functions

new Between(1, 10).time(4000)
  .easing(Between.Easing.Cubic.InOut)
  .on('update', (value) => {
      console.log(value);
  });
```


<img src=".gitbook/assets/screen-shot-2018-07-29-at-13.25.52.png" height="400">

[easing-functions npm](https://www.npmjs.com/package/easing-functions) 

## Color

Color types:

* HEX
* HSL
* RGB
* Words \(red, yellow...\)

```javascript
import Between from 'between.js';
import ColorPlugin from 'between.js/build/dom-color.between.js';

Between._plugins.color = ColorPlugin;

new Between('red', 'rgb(255,40,30)').time(4000)
  .on('update', (value) => {
      console.log(value);
  });
```

Or in HTML:

```html
<script src="./path/to/between.js"></script>
<script src="./path/to/dom-color.between.js"></script>
```

## Mixed examples

```javascript
import Between from 'between.js';
import Easing from 'easing-functions';
import ColorPlugin from 'between.js/build/dom-color.between.js';

Between._plugins.color = ColorPlugin;

// choose easing mode frome easing-functions

new Between('red', 'rgb(255,40,30)').time(4000)
  .loop('repeat', 3)
  .easing(Between.Easing.Linear)
  .on('update', (value) => {
      console.log(value);
  });
```

```javascript
import Between from 'between.js';
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
import Between from 'between.js';
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

