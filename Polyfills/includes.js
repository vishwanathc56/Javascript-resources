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

