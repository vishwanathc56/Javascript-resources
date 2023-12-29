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

// prints [4,5,1,2,3]
console.log(array);


Inside the unshift method, we first convert the arguments object to an array using Array.prototype.slice.call(arguments). Then, we calculate the original length of the array and the new length after adding the new elements.

Next, we use a for loop to shift the existing elements to the right to make space for the new elements. We start from the end of the array and move towards the beginning, shifting each element by the length of the new elements. This ensures that we don't overwrite any existing elements.

Finally, we use another for loop to add the new elements to the beginning of the array, starting from index 0. We then return the new length of the array.
