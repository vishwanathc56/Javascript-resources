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


