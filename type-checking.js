console.log(typeof null);                 //object
console.log(typeof undefined);            //undefined
console.log(null === undefined);          //false
console.log(null == undefined);           //true
//-----------------------------------------------------------------------------------------------------------------------------------------------
console.log(typeof class {});             //function
//-----------------------------------------------------------------------------------------------------------------------------------------------
console.log(typeof(NaN));                 //  number
console.log(typeof(typeof(NaN)));         //  string
// ** typeof typeof ................ will ALWAYS be `string`.
//-----------------------------------------------------------------------------------------------------------------------------------------------
