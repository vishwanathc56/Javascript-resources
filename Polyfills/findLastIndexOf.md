```
if (!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function (predicate, thisArg) {
    if (this === undefined || this === null) {
      throw new TypeError('Cannot convert this value to object');
    }

    var array = Object(this);
    var length = array.length >>> 0;
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }

    for (var i = length - 1; i >= 0; i--) {
      if (i in array && predicate.call(thisArg, array[i], i, array)) {
        return i;
      }
    }

    return -1;
  };
}

const array = [1,2,3,12,13,8];

const greaterThanTen = (element) => element > 10;

console.log(array.findLastIndex(greaterThanTen)); //output: 4
```

