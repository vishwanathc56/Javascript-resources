```if (!Array.prototype.push) {
  Array.prototype.push = function(...items) {
    var len = this.length;
    for (let i = 0; i < items.length; i++) {
      this[len + i] = items[i];
    }
    return this.length;
  };
}
const array = [1, 2, 3];

array.push(4, 5);

// prints [1,2,3,4,5]
console.log(array);```
