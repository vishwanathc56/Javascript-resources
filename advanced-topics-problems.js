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

    (()=>{
    var a = b = 5;
    })();
    console.log(typeof a, typeof b);

ans : undefined number

JavaScript is behaving like this because of how variable declaration and assignment work in the language.

When the IIFE is executed, the statement var a = b = 5; is executed. This statement first declares a variable a with the var keyword and initializes it to the value 5. However, the statement also assigns the value of 5 to a variable b that has not been declared. 
This is allowed in JavaScript and it creates a global variable b.  However, the var keyword applies only to the variable a. It does not apply to b, so the variable b is declared as a global variable instead of a local variable. 
This is because the variable b does not have a var, let, or const keyword in front of it, which means it gets attached to the global object. When the console.log() statement is executed, it tries to access the variables a and b. 
Since a was declared inside the IIFE and is not accessible outside of it, it is undefined. On the other hand, b was declared globally, so it is accessible outside the IIFE, and it has a value of 5, so its typeof is "number".
//---------------------------------------------------------------------------------------------------------------------------------------------------------
