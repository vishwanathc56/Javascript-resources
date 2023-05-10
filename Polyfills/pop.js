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

Explanation:

The if statement checks if the pop() method does not already exist on the Array.prototype object. If it doesn't, we define it using a function expression.
The function first checks if the array is empty. If it is, it returns undefined as specified by the ECMAScript specification.
The index of the last element of the array is saved to a variable lastIndex.
The last element of the array is saved to a variable lastItem.
The last element of the array is deleted from the array using the delete operator.
The length of the array is decreased by one, and the saved lastItem is returned.
Note: This implementation assumes that the this keyword refers to a valid array object, and may not work as expected if used on other types of objects.
