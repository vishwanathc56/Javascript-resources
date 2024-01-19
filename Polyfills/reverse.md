```
// Polyfill for Array.prototype.reverse
if (!Array.prototype.reverse) {
  Array.prototype.reverse = function() {
    let start = 0;
    let end = this.length - 1;

    while (start < end) {
      // Swap elements at start and end indices
      const temp = this[start];
      this[start] = this[end];
      this[end] = temp;

      // Move indices towards the center
      start++;
      end--;
    }

    return this; // Return the reversed array (for method chaining)
  };
}
```


```
Array.prototype.reverse = function() {
  for (let i = 0; i < Math.floor(this.length / 2); i++) {
    const temp = this[i];
    this[i] = this[this.length - 1 - i];
    this[this.length - 1 - i] = temp;
  }
  return this;
};
```
// Example usage
let myArray = [1, 2, 3, 4];
myArray.reverse();
console.log(myArray); // Output: [4, 3, 2, 1]


const array = ['one', 'two', 'three'];
console.log('array:', array);
// expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array:', array);
// expected output: "array:" Array ["three", "two", "one"]
