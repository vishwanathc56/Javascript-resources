if (!Array.prototype.fill) {
  Array.prototype.fill = function(value, start, end) {
    // If start is negative, set it to length+start
    start = start || 0;
    if (start < 0) {
      start = this.length + start;
    }

    // If end is negative, set it to length+endhttps://github.com/vishwanathc56/Javascript-resources/blob/main/Polyfills/fill.js
    end = end || this.length;
    if (end < 0) {
      end = this.length + end;
    }

    // Set all elements between start and end to the value
    for (let i = start; i < end; i++) {
      this[i] = value;
    }

    // Return the modified array
    return this;
  };
}


const array = [1, 2, 3, 4];
console.log(array.fill(0, 2, 4));    // [ 1, 2, 0, 0 ]
console.log(array.fill(5, 1));       // [ 1, 5, 5, 5 ]
console.log(array.fill(6));          // [ 6, 6, 6, 6 ]
