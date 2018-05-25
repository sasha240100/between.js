# between.js [![](https://travis-ci.org/sasha240100/between.js.svg?branch=master)](https://travis-ci.org/sasha240100/between.js) [![codecov](https://codecov.io/gh/sasha240100/between.js/branch/master/graph/badge.svg)](https://codecov.io/gh/sasha240100/between.js)

## Example

```js
import between from 'between.js';

//     from, to   time
between(1, 10).time(1000).on('update', (value) => {
  // ...
}).on('complete', () => {
  // ...
})
```
