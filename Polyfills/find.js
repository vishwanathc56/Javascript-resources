
// Check if Array.prototype.find exists
if (!Array.prototype.find) {

  // If it does not exist, add it to the prototype
  Array.prototype.find = function(callback) {

    // Loop through each element of the array
    for (var i = 0; i < this.length; i++) {

      // Call the callback function for each element with the element, index, and array as arguments
      if (callback(this[i], i, this)) {

        // If the callback function returns true, return the current element
        return this[i];
      }
    }

    // If no element is found, return undefined
    return undefined;
  };
}

var arr = [1, 2, 3, 4, 5];

var found = arr.find(function(element) {
  return element > 3;
});

console.log(found); // 4
