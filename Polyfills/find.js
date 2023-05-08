
if (!Array.prototype.find) {
  Array.prototype.find = function(callback) {
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
}

var arr = [1, 2, 3, 4, 5];

var found = arr.find(function(element) {
  return element > 3;
});

console.log(found); // 4
