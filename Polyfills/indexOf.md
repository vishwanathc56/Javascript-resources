```
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex = 0) {
    const length = this.length;
    
    // Handle negative starting index
    let startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);
    
    for (let i = startIndex; i < length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    
    return -1; // Element not found
  };
}
```

```
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex = 0) {
    for (let i = Math.max(fromIndex >= 0 ? fromIndex : this.length + fromIndex, 0); i < this.length; i++)
      if (this[i] === searchElement) return i;
    return -1;
  };
}
```

[medium article](https://medium.com/@stheodorejohn/javascript-indexof-polyfill-mastering-array-search-in-javascript-c345fe082150)
```
function customIndexOf(arr, searchElement, fromIndex = 0) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }
  const length = arr.length;
  let startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);
  for (let i = startIndex; i < length; i++) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
}
```

```
if (!Array.prototype.customIndexOf) {
  Array.prototype.customIndexOf = function(searchElement, fromIndex = 0) {
    if (!Array.isArray(this)) {
      throw new TypeError("Object is not an array");
    }

    const length = this.length;
    let startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);

    for (let i = startIndex; i < length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };
}
```
var array = [2, 9, 9];
console.log(array.indexOf(2));     // 0
console.log(array.indexOf(7));     // -1
console.log(array.indexOf(9, 2));  // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0
