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

```
Remembering all the nuances of JavaScript can indeed be challenging. Here are some tips and tricks to help you recall the key points more easily:

typeof Operator:

Basic types:
typeof null is "object" (historical bug).
typeof undefined is "undefined".
typeof NaN is "number" (NaN is a special number).
typeof function and typeof class are both "function".
typeof [] and typeof {} both return "object".
Nested typeof: typeof typeof anything is always "string" because typeof always returns a string.
Equality Checks:

Strict equality (===):
null === null is true.
NaN === NaN is false (use Number.isNaN() to check for NaN).
undefined === undefined is true.
Loose equality (==):
null == undefined is true.
null == null is true.
NaN == NaN is false.
Case Sensitivity:

JavaScript is case-sensitive, so null and NULL are treated differently.
typeof null is "object".
typeof NULL will throw an error if NULL is not defined.
Special Values:

NaN stands for "Not a Number" but is of type "number".
Use Number.isNaN() or isNaN() to check if a value is NaN.
null represents the intentional absence of any object value and is of type "object".
Common Pitfalls:

typeof null is "object".
NaN is the only value that is not equal to itself.
Mnemonic Tricks:
NUNN Rule:

Null Undefined Number NaN:
typeof null → "object"
typeof undefined → "undefined"
typeof NaN → "number"
NaN === NaN → false
Equalities:

NaN is never equal to anything, not even itself.
null and undefined are loosely equal (==), but not strictly (===).
Case Sensitivity:

Remember that JavaScript cares about case: null is valid, NULL is not.
Array and Object:

Both arrays and objects have the type "object".
To differentiate arrays from objects, use Array.isArray(array).
By keeping these tricks and mnemonics in mind, you can more easily navigate the quirks and details of JavaScript's type system and equality comparisons.
```
