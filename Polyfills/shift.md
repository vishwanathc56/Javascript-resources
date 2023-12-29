```
if (!Array.prototype.shift) {
  Array.prototype.shift = function() {
    if (this.length === 0) return undefined;
    let firstItem = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    this.length--;
    return firstItem;
  };
}
```
const array = [1, 2, 3];
const firstElement = array.shift(); 

// prints 1
console.log(firstElement);

// prints [2,3]
console.log(array);

