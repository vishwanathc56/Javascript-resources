if (!Array.prototype.pop) {
  Array.prototype.pop = function() {
    if (this.length === 0) return undefined;
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];
    delete this[lastIndex];
    this.length--;
    return lastItem;
  };
}


const array = [1, 2, 3];
const popped = array.pop();

// prints 3
console.log(popped);

// prints [1,2]
console.log(array);

