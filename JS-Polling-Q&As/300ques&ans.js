//P1 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗼𝘂𝘁𝗽𝘂𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗰𝗼𝗻𝘀𝗼𝗹𝗲 & 𝘄𝗵𝘆 ?

const x = new String("tricky");
const y = x;
console.log(x===y);   //a)True  b)False

ans: TRUE
Because x has address of string obj and same is assigned to Y. Since both point to same loaction of string object, TRUE is answer.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//P2 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗼𝘂𝘁𝗽𝘂𝘁 𝘁𝗼 𝗰𝗼𝗻𝘀𝗼𝗹𝗲 & 𝘄𝗵𝘆 ?

console.log(new String("yes")===new String("yes"));
console.log("yes"==="yes"); 

a)True, True
b)False, True
c)True, False
d)False, False

ans : FALSE, TRUE

new String('yes') creates new object everytime. So, new String('yes') === new String('yes') will be false because both the objects will be different.

While 'yes' === 'yes' is just a normal comparison of primitive string type and so it will be true.
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//P3 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗼𝘂𝘁𝗽𝘂𝘁 𝘁𝗼 𝗰𝗼𝗻𝘀𝗼𝗹𝗲 & 𝘄𝗵𝘆 ?

let x =10;
function myFunc(y){
y= 12;
}
myFunc(x);
console.log(x);  //a)10  b)12  c)undefined

ans: 10  Primitives are passed by value, not by reference. So changing them inside function doesnt change original value
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//P4 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗼𝘂𝘁𝗽𝘂𝘁 𝘁𝗼 𝗰𝗼𝗻𝘀𝗼𝗹𝗲 & 𝘄𝗵𝘆 ?

let x = 5;
let x =10 ;
console.log(x); //a)5  b)10  c)syntax error 

ans : SYNTAX ERROR  expln :we cant re-declare already declared variable but can be re-assigned.
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//P5 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗼𝘂𝘁𝗽𝘂𝘁 𝘁𝗼 𝗰𝗼𝗻𝘀𝗼𝗹𝗲 & 𝘄𝗵𝘆 ?

    function foo(){}
    console.log(typeof foo);
    
    a)object  b)function c)undefined

ans : function
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//P6 𝗜𝗳 𝗮 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗵𝗮𝘀 𝗻𝗼 𝗿𝗲𝘁𝘂𝗿𝗻 𝘃𝗮𝗹𝘂𝗲 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱, 𝘄𝗵𝗮𝘁 𝘃𝗮𝗹𝘂𝗲 𝗱𝗼𝗲𝘀 𝗶𝘁 𝗿𝗲𝘁𝘂𝗿𝗻 ?
a) null
b) undefined
c) nothing

ans: undefined 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// P7 𝗜𝗻 𝗝𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁, 𝘄𝗵𝗮𝘁 𝘁𝘆𝗽𝗲 𝗼𝗳 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝗶𝗲𝘀 𝘀𝗵𝗼𝘄 𝘂𝗽 𝗶𝗻 𝗳𝗼𝗿...𝗶𝗻 𝗹𝗼𝗼𝗽𝘀?  
a)Executable properties
b)Enumerable properties
c)Iterable properties

ans : Enumerable properties
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// P8 𝗗𝗼𝗲𝘀 𝗝𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁 𝘀𝘂𝗽𝗽𝗼𝗿𝘁 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗼𝘃𝗲𝗿𝗹𝗼𝗮𝗱𝗶𝗻𝗴 ?

ans : NO
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
