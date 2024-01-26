```
if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this);
    const length = array.length >>> 0;
    const result = [];

    for (let i = 0; i < length; i++) {
      if (i in array) {
        const currentElement = array[i];

        if (callback.call(thisArg, currentElement, i, array)) {
          result.push(currentElement);
        }
      }
    }

    return result;
  };
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

```
