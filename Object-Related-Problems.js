const obj = Object.assign({ name: "JavaScript"}, {name: "ECMA"}, {name: "LiveScript"});

const result = obj.name;
console.log(result);                  // LiveScript

Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. 
The Object.assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
