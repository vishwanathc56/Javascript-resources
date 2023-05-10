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

const array = [1, 2, 3];
const firstElement = array.shift(); 

// prints 1
console.log(firstElement);

// prints [2,3]
console.log(array);

Explanation:

The if statement checks if the shift() method does not already exist on the Array.prototype object. If it doesn't, we define it using a function expression.
The function first checks if the array is empty. If it is, it returns undefined as specified by the ECMAScript specification.
The first element of the array is saved to a variable firstItem.
The function then loops through the array, starting from the second element, and copies each element to the previous index (i.e., this[i - 1] = this[i]), effectively shifting the elements one index to the left.
Finally, the length of the array is decreased by one, and the saved firstItem is returned.
Note: This implementation assumes that the this keyword refers to a valid array object, and may not work as expected if used on other types of objects.
