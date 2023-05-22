if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true;
      }
    }
    return false;
  };
}


const array = [5, 12, 8, 130, 44];
const found = array.includes(5);

// prints true
console.log(found); // true
