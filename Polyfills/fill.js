if (!Array.prototype.fill) {
  Array.prototype.fill = function(value, start, end) {
    // If start is negative, set it to length+start
    start = start || 0;
    if (start < 0) {
      start = this.length + start;
    }

    // If end is negative, set it to length+end
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

This code first checks if Array.prototype.fill already exists. If it doesn't, it defines a new implementation that takes a value, start, and end argument, just like the native implementation.

The polyfill then handles negative start and end arguments, just like the native implementation. It then loops over all elements between start and end and sets them to the value. Finally, it returns the modified array.

This polyfill should work in most cases where the native Array.prototype.fill is not available.

const array = [1, 2, 3, 4];
console.log(array.fill(0, 2, 4));    // [ 1, 2, 0, 0 ]
console.log(array.fill(5, 1));       // [ 1, 5, 5, 5 ]
console.log(array.fill(6));          // [ 6, 6, 6, 6 ]
