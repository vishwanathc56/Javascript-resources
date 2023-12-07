```
// Applying the polyfill
if (!Array.prototype.some) {
  Array.prototype.some = function(callback, thisArg) {
    if (this == null || this.length === 0) {
      throw new TypeError('Array.prototype.some called on null, undefined, or an empty array');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var obj = Object(this);
    var len = obj.length >>> 0;

    for (var i = 0; i < len; i++) {
      if (i in obj && callback.call(thisArg, obj[i], i, obj)) {
        return true;
      }
    }

    return false;
  };
}

```

//----------------------------------------------------------------------------------------------------------------------------------
// Check if any element in the array satisfies the condition
Array.prototype.some = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};


const numbers = [1, 2, 3, 4, 5];

// Check if any number in the array is even
const hasEvenNumber = numbers.some(function(element) {
  return element % 2 === 0;
});

console.log(hasEvenNumber); // Output: true
