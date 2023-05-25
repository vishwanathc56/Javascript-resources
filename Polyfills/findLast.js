
if (!Array.prototype.findLast) {
  Array.prototype.findLast = function(predicate) {
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }

    for (let i = this.length - 1; i >= 0; i--) {
      if (predicate(this[i], i, this)) {
        return this[i];
      }
    }

    return undefined;
  };
}


const array = [1,2,3,12,13,8];

const greaterThanTen = (element) => element > 10;

console.log(array.findLast(greaterThanTen));
// expected output: 13
