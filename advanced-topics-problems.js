function mul(x){
    return function (y){
        return [
            x*y, 
            function (z) {
                return x*y*z;
            }
        ]
    }
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));

ans : 6 24
//---------------------------------------------------------------------------------------------------------------------------------------------------------
(() => {
let x = (y = 10);
})();
console.log(typeof y);

ans : number

Result is a number. However, if it is in strict mode ( 'use strict' ), then it will throw a reference error. 
It doesn't allow implicit global variable declarations when it is in strict mode.
//---------------------------------------------------------------------------------------------------------------------------------------------------------

What is the output of the immediately invoked function expression (IIFE) in JavaScript?

    ans : depends 
//---------------------------------------------------------------------------------------------------------------------------------------------------------
