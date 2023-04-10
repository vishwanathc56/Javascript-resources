console.log(typeof null);                 //object
console.log(typeof undefined);            //undefined
console.log(null === undefined);          //false
console.log(null == undefined);           //true
console.log(null===null)                  //true 
console.log(typeof null=== typeof null)   //true
console.log(NaN === NaN);                 //false  

This is because NaN (which stands for "Not a Number") is a special value in JavaScript that represents an undefined or unrepresentable value resulting from a mathematical operation.
Importantly, NaN is not equal to any value, including itself. Therefore, when you compare NaN to itself using the === operator, the result will always be false. 
To test for NaN values, you can use the isNaN() function instead. For example, isNaN(NaN) will return true.


//-----------------------------------------------------------------------------------------------------------------------------------------------
console.log(typeof class {});             //function
//-----------------------------------------------------------------------------------------------------------------------------------------------

console.log(typeof(NaN));                 //  number
console.log(typeof(typeof(NaN)));         //  string
// ** typeof typeof ................ will ALWAYS be `string`.

//-----------------------------------------------------------------------------------------------------------------------------------------------
const object = { }
const array = [ ]
console.log(typeof object , typeof array)  // object object
//-----------------------------------------------------------------------------------------------------------------------------------------------
const object = { }
const array = [ ]
console.log(typeof object === typeof array)  // true
//-----------------------------------------------------------------------------------------------------------------------------------------------
console.log(typeof undefined == typeof NULL); 

ans : true.

Because we don't have a 'NULL' type in JS.

console.log(typeof undefined) // undefined
console.log(typeof null) // object
BUT
console.log(typeof NULL) // undefinde

JavaScript is a case-sensitive language so 'null' is different from 'NULL' .
//-----------------------------------------------------------------------------------------------------------------------------------------------
