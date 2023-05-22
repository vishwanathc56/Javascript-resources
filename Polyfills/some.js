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
