Array.prototype.reverse = function() {
  for (let i = 0; i < Math.floor(this.length / 2); i++) {
    const temp = this[i];
    this[i] = this[this.length - 1 - i];
    this[this.length - 1 - i] = temp;
  }
  return this;
};


const array = ['one', 'two', 'three'];
console.log('array:', array);
// expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array:', array);
// expected output: "array:" Array ["three", "two", "one"]
