```
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    let array = Object(this);
    let length = array.length >>> 0;

    for (let i = 0; i < length; i++) {
      if (callback(array[i], i, array)) {
        return i;
      }
    }

    return -1;
  };
}
```

```
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }

    for (let i = 0; i < this.length; i++) {
      if (predicate(this[i], i, this)) {
        return i;
      }
    }

    return -1;
  };
}

const array = [1,2,3,12,13,15];
const greaterThanTen = (element) => element > 10;

console.log(array.findIndex(greaterThanTen)); // expected output: 3
```
