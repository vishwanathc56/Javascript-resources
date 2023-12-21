```
const arr = [0,2,1,2,0];

let count = 0;

for(let num of arr){
    if(num!==0){
        arr[count++] = num;
    }
}

while(count<arr.length){
    arr[count++]=0;
}

console.log(arr); // [ 2, 1, 2, 0, 0 ]
```

//-------------------------------------------------------------------------------------------------------------------------------
//polyfill for skip function 
```    
2) Array.prototype.skip = function (arg){
    let array = this;
    
    // if(typeof arg === 'functions'){
    // }   // [1,1,2,3,4] ????
    if (typeof arg === "function") {
      return array.filter((num) => !arg(num));
    } else {
      return array.filter((num) => num !== arg);
    }
}
```
let res1 = [1,1,2,3,4].skip(1);
let res2 = [1,1,2,3,4].skip((num)=>num<3);

console.log(res1);  // [ 2, 3, 4 ]
console.log(res2);  // [ 3, 4 ]


In the quiz, the skip function is added to the Array prototype, which means it is available to all arrays.

Overall logic is:
- This implementation uses the typeof operator to determine whether the argument passed to the skip method is a function or not.
- If it is a function, it calls the function on each element of the array using the Array.prototype.filter method. Otherwise, it checks whether each element is equal to the argument using the !== operator.

Array.prototype.skip = function (arg) {
 let array = this;
 if (typeof arg === "function") {
 return array.filter((num) => !arg(num));
 } else {
 return array.filter((num) => num !== arg);
 }
 };

 let res1 = [1, 1, 2, 3, 4].skip(1);//the argument passed is 1, so the resulting array will filter out all occurrences of the value 1 and return [𝟮, 𝟯, 𝟰].

 let res2 = [1, 1, 2, 3, 4].skip((num) => num < 3); //the arrow function (num) => num < 3 returns true for elements 1 and 2, and false for 3 and 4. Therefore, the resulting array res2 only contains elements 3 and 4. i.e., [𝟯, 𝟰]

 console.log(res1); // [𝟮, 𝟯, 𝟰]
 console.log(res2); //[𝟯, 𝟰]

//----------------------------------------------------------------------------------------------------------------------------------------------------------
```
function log(a,b,c,d) {
arguments[0] = 'bfe'
arguments[3] = 'dev'

console.log(a,b,c,d)
}

log(1,2,3) 
```
ans : bfe 2 3 undefined
//----------------------------------------------------------------------------------------------------------------------------------------------------------
```
const arr =[1,2,3,4];

let i =0 ;

let j=  arr.length-1;

while(i<j){
    console.log([arr[i],arr[j]] , [arr[j],arr[i]]);
    [arr[i],arr[j]] = [arr[j],arr[i]];
    i++
    j--
}

console.log(arr); 
```
ans :  [ 4, 3, 2, 1 ]
//----------------------------------------------------------------------------------------------------------------------------------------------------------
```
const a1 =[1,2,3,4];
const a2 =[1,2,5,6];

let res1 = a1.filter((num)=> !a2.includes(num));
let res2 = a2.filter((num)=> !a1.includes(num));

console.log(...res1, ...res2);
```
ans : 3 4 5 6
//----------------------------------------------------------------------------------------------------------------------------------------------------------
