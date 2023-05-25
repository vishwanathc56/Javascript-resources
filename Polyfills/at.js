if (!Array.prototype.customAt) {
  Array.prototype.customAt = function(index) {
    // Convert negative index to positive index
    const positiveIndex = index >= 0 ? index : this.length + index;
    
    // Check if the positive index is within the array bounds
    if (positiveIndex >= 0 && positiveIndex < this.length) {
      return this[positiveIndex];
    }
    
    // Return undefined if the index is out of bounds
    return undefined;
  };
}


const array = [5, 12, 8, 130, 44];

console.log(array.customAt(2)); // prints 8
console.log(array.customAt(-1)); // prints 44
console.log(array.customAt(100)); // prints undefined
