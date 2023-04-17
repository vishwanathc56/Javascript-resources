//https://learnersbucket.com/examples/interview/filter-array-of-objects-on-value-or-index/
//Implement a function in JavaScript that filters an array of objects based on the value or index.

Input:
const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
];

console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }

ans : const filterone = (arr, id) => {
        return arr.filter((item) => {
          return item.id == id;
        });
      };  // [ { name: 'Shahrukh', id: '0' } ]

//------------------------------------------------------------------------------------------------------------------------------------------------------------
