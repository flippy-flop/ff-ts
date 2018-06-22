# ff-ts

A TypeScript implementation of the Flippy Flop data structure.

## Usage

```js
var ff = new FlippyFlop();
ff.flip(1)
console.log(ff.count());
ff.flip(2)
console.log(ff.count());
ff.flip(3)
console.log(ff.count());
ff.flip(4)
console.log(ff.count());
ff.flop();
console.log(ff.count());
ff.flop();
console.log(ff.count());
```