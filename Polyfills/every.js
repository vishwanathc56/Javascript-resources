
if (!Array.prototype.every) {
  Array.prototype.every = function(callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (!callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
}
const even = (element) => element % 2 === 0;
const array = [2, 4, 6, 8];

// expected output: true
console.log(array.every(even));

