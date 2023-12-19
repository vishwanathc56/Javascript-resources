```
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true;
      }
    }
    return false;
  };
}
```

or 

```
// Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or undefined');
    }

    var array = Object(this);
    var length = array.length >>> 0;

    if (length === 0) {
      return false;
    }

    var startIndex = fromIndex | 0;
    var currentIndex;

    if (startIndex >= 0) {
      currentIndex = startIndex;
    } else {
      currentIndex = Math.max(length + startIndex, 0);
    }

    while (currentIndex < length) {
      if (currentIndex in array && array[currentIndex] === searchElement) {
        return true;
      }
      currentIndex++;
    }

    return false;
  };
}

// Example usage:
var exampleArray = [1, 2, 3, 4, 5];

console.log(exampleArray.includes(3)); // true
console.log(exampleArray.includes(6)); // false
```

const array = [5, 12, 8, 130, 44];
const found = array.includes(5);

// prints true
console.log(found); // true
