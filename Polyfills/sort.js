
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

var myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
var myArray = ['March', 'Jan', 'Feb', 'Dec'];      // [ 'Dec', 'Feb', 'Jan', 'March' ]
var myArray = [1, 30, 4, 21, 100000];              // [1, 4, 21, 30, 100000]
console.log(myArray.sortBy()); 
var myArray = [1, 30, 4, 21, 100000];
console.log(myArray.sortBy(function(a, b) { return b - a; })); // [1, 100000, 21, 30, 4]
