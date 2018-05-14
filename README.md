# between.js

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
