```
if (!Array.prototype.sortWithPolyfill) {
  Array.prototype.sortWithPolyfill = function(compareFunction) {
  
    if (typeof compareFunction !== 'function') {
      compareFunction = function(a, b) {
        if (a === undefined || b === undefined) {
          return 0;
        }
        if (a === b) {
          return 0;
        }
        return a < b ? -1 : 1;
      };
    }

    for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          var temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

var arr = [3, 1, 4, 5, 9, 2, 6, 8, 7];
arr.sortWithPolyfill();

console.log(arr); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```




//------------------------------------------------------------------------------------------------------------------
```
if (!Array.prototype.sortBy) {
  Array.prototype.sortBy = function(compareFn) {
    // Clone the array to avoid modifying the original
    var arr = this.slice(0);

    // If no compare function is provided, use the default
    if (!compareFn) {
      compareFn = function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
    }

    // Call the Array.prototype.sort() method with the compare function
    return arr.sort(compareFn);
  };
}
```
This polyfill adds a sortBy() method to the Array.prototype object if it does not already exist. The sortBy() method creates a copy of the original array using the slice() method to avoid modifying the original array. It then uses the provided compareFn function to sort the cloned array using the Array.prototype.sort() method. If no compareFn function is provided, the polyfill uses a default comparison function that compares the elements of the array using the less-than and greater-than operators.

To use this polyfill, you can call the sortBy() method on an array just like you would call the sort() method:



var myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
var myArray = ['March', 'Jan', 'Feb', 'Dec'];      // [ 'Dec', 'Feb', 'Jan', 'March' ]
var myArray = [1, 30, 4, 21, 100000];              // [1, 4, 21, 30, 100000]
console.log(myArray.sortBy()); 
var myArray = [1, 30, 4, 21, 100000];
console.log(myArray.sortBy(function(a, b) { return b - a; })); // [1, 100000, 21, 30, 4]
