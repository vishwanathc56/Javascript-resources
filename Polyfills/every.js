
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

The if statement checks if the every method already exists on the Array.prototype. If it doesn't, we define the every method.

Inside the every method, we take two arguments: callback and thisArg. The callback argument is the function to test each element of the array, and the thisArg argument is the value to use as this when executing the callback.

We then use a for loop to iterate over each element of the array. For each element, we call the callback function with three arguments: the current element, its index, and the original array. If the callback function returns false, we immediately return false, indicating that not all elements passed the test.

If the callback function returns true for all elements, we return true.
