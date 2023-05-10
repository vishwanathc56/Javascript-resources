if (!Array.prototype.push) {
  Array.prototype.push = function(...items) {
    const len = this.length;
    for (let i = 0; i < items.length; i++) {
      this[len + i] = items[i];
    }
    return this.length;
  };
}
const array = [1, 2, 3];

array.push(4, 5);

// prints [1,2,3,4,5]
console.log(array);

Explanation:

The if statement checks if the push() method does not already exist on the Array.prototype object. If it doesn't, we define it using a function expression.
The function uses the rest parameter syntax to accept any number of arguments as an array.
The length of the original array is saved to a variable len.
The function then loops through each argument passed to the function and assigns it to the next available index in the array (i.e., this[len + i] = items[i]), effectively appending the items to the end of the array.
Finally, the new length of the array is returned.
Note: This implementation assumes that the this keyword refers to a valid array object, and may not work as expected if used on other types of objects.
