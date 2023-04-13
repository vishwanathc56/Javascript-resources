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
// P9  𝐰𝐡𝐢𝐜𝐡 𝐨𝐟 𝐭𝐡𝐞 𝐟𝐨𝐥𝐥𝐨𝐰𝐢𝐧𝐠 𝐢𝐬 𝐧𝐨𝐭 𝐰𝐚𝐲 𝐭𝐨 𝐜𝐫𝐞𝐚𝐭𝐞 𝐧𝐞𝐰 𝐨𝐛𝐣𝐞𝐜𝐭 𝐢𝐧 𝐉𝐒 ?

a) new Object()    b)Object.create()    c)factory pattern    d)literal notation

ans : C
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// P10 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗱𝗲𝗳𝗮𝘂𝗹𝘁 𝘀𝗼𝗿𝘁 𝘁𝗵𝗲 𝗔𝗿𝗿𝗮𝘆 𝘀𝗼𝗿𝘁() 𝗺𝗲𝘁𝗵𝗼𝗱 ? 𝗟= 𝗹𝗮𝗿𝗴𝗲𝘀𝘁, 𝗦= 𝘀𝗺𝗮𝗹𝗹𝗲𝘀𝘁

a) L to S by numerical value  b) S to L by numerical value  b) L to S by character value    b) S to L by character value

ans : d
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// P13 𝐰𝐡𝐚𝐭 𝐞𝐫𝐫𝐨𝐫 𝐢𝐬 𝐭𝐡𝐫𝐨𝐰𝐧 𝐰𝐡𝐞𝐧 𝐲𝐨𝐮 𝐚𝐭𝐭𝐞𝐦𝐩𝐭 𝐭𝐨 𝐚𝐬𝐬𝐢𝐠𝐧 𝐚 𝐧𝐞𝐰 𝐯𝐚𝐥𝐮𝐞 𝐭𝐨 𝐚 𝐜𝐨𝐧𝐬𝐭? 

a)Reference Error b) Range Error  b) Type Error    b) Error

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐭𝐡𝐞 𝐫𝐞𝐭𝐮𝐫𝐧 𝐭𝐲𝐩𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐛𝐞𝐥𝐨𝐰 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 ?
// 𝐚𝐬𝐲𝐧𝐜 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐡𝐞𝐥𝐥𝐨() { 𝐫𝐞𝐭𝐮𝐫𝐧 "𝐇𝐞𝐥𝐥𝐥𝐨"; }

) string    b)async    c)Promise   d)None of the above

ans : Prmoise as async functions always return promise.






