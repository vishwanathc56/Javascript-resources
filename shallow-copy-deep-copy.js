1)//shallow cloning vs deep cloning

let original = { a: 1, b: { c: 2 } };

let shallowCopy = {...original}
//console.log(shallowCopy)  { a: 1, b: { c: 2 } }

let deepCopy = JSON.parse(JSON.stringify(original));
//console.log(deepCopy)     { a: 1, b: { c: 2 } }

original.b.c = 3;

console.log(original.b.c)
console.log(shallowCopy.b.c)
console.log(deepCopy.b.c)

// ans :  3,3,2

//------------------------------------------------------------------------------------------------------------------------------------------------------
// Given an array of objects, write a function that creates a shallow copy and a deep copy of the array.

  const originalArray = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  function copyArray(originalArray) {
    // Create a shallow copy of the original array using the slice() method.
    const shallowCopy = originalArray.slice();

    // Create a deep copy of the original array using the JSON.parse() and JSON.stringify() methods.
    const deepCopy = JSON.parse(JSON.stringify(originalArray));

    return [shallowCopy, deepCopy];
  }

  // Test the function
  const [shallowCopy, deepCopy] = copyArray(originalArray);

  console.log(shallowCopy[0] === originalArray[0]); // true
  console.log(deepCopy[0] === originalArray[0]); // false
//------------------------------------------------------------------------------------------------------------------------------------------------------
// Given an object containing nested objects, write a function that creates a shallow copy and a deep copy of the object.

const originalObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

function copyObject(originalObject) {
  // Create a shallow copy of the original object using the Object.assign() method.
  const shallowCopy = Object.assign({}, originalObject);

  // Create a deep copy of the original object using the JSON.parse() and JSON.stringify() methods.
  const deepCopy = JSON.parse(JSON.stringify(originalObject));

  return [shallowCopy, deepCopy];
}

// Test the function
const [shallowCopy, deepCopy] = copyObject(originalObject);

console.log(shallowCopy.address === originalObject.address); // true
console.log(deepCopy.address === originalObject.address); // false

//------------------------------------------------------------------------------------------------------------------------------------------------------

// Given an array of objects, write a function that creates a shallow copy and a deep copy of the array and sorts the copies based on a specified property.

const originalArray = [  { id: 1, name: "Alice", age: 25 },  { id: 2, name: "Bob", age: 30 },  { id: 3, name: "Charlie", age: 35 },];

function copyAndSortArray(originalArray, prop) {
  // Create a shallow copy of the original array using the slice() method.
  const shallowCopy = originalArray.slice();

  // Create a deep copy of the original array using the JSON.parse() and JSON.stringify() methods.
  const deepCopy = JSON.parse(JSON.stringify(originalArray));

  // Sort the shallow copy and deep copy based on the specified property.
  shallowCopy.sort((a, b) => a[prop] - b[prop]);
  deepCopy.sort((a, b) => a[prop] - b[prop]);

  return [shallowCopy, deepCopy];
}

// Test the function
const [shallowCopy, deepCopy] = copyAndSortArray(originalArray, "age");

console.log(shallowCopy[0].name); // "Alice"
console.log(deepCopy[0].name); // "Alice"
console.log(shallowCopy[2].name); // "Charlie"
console.log(deepCopy[2].name); // "Charlie"


