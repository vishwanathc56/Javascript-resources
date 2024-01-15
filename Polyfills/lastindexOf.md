```
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
    if (this === undefined || this === null) {
      throw new TypeError('Cannot convert this value to object');
    }

    var array = Object(this);
    var length = array.length >>> 0;
    if (length === 0) {
      return -1;
    }

    var index = length - 1;
    if (arguments.length > 1) {
      index = Math.min(index, fromIndex);
    }

    if (index < 0) {
      index = length + index;
    }

    for (; index >= 0; index--) {
      if (index in array && array[index] === searchElement) {
        return index;
      }
    }

    return -1;
  };
}
```

//------------------------------------------------------------------------------------------------

```
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('Cannot convert this value to object');
    }

    var array = Object(this);
    var length = array.length >>> 0;

    if (length === 0) {
      return -1;
    }

    var index = fromIndex | 0;

    if (index >= length) {
      index = length - 1;
    }

    for (; index >= 0; index--) {
      if (index in array && array[index] === searchElement) {
        return index;
      }
    }

    return -1;
  };
}
```


const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo')); // output: 3

console.log(animals.lastIndexOf('Tiger')); // output: 1

console.log(animals.lastIndexOf('Dodo', 2)); // output: 0

