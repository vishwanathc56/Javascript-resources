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



