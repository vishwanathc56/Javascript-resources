```
if (!Array.prototype.unshift) {
  Array.prototype.unshift = function () {
    const args = Array.prototype.slice.call(arguments);
    const originalLength = this.length;
    const newLength = originalLength + args.length;
    for (let i = newLength - 1; i >= args.length; i--) {
      this[i] = this[i - args.length];
    }
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
    return newLength;
  };
}
```
const array = [1, 2, 3];

array.unshift(4, 5);

console.log(array); // [4,5,1,2,3]

```
if (!Array.prototype.unshift) {
  Array.prototype.unshift = function() {
    const numArgs = arguments.length;
    const currentLength = this.length;

    // Move existing elements to make room for new elements
    for (let i = currentLength - 1; i >= 0; i--) {
      this[i + numArgs] = this[i];
    }

    // Add new elements to the beginning of the array
    for (let j = 0; j < numArgs; j++) {
      this[j] = arguments[j];
    }

    // Update the length property
    this.length += numArgs;

    return this.length;
  };
}

// Example usage:
const myArray = [1, 2, 3];
const newLength = myArray.unshift(-3, -2, -1, 0);
console.log(myArray); // Output: [-3, -2, -1, 0, 1, 2, 3]
console.log(newLength); // Output: 7
```



