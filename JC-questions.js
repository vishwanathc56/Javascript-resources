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

This seems like we have to push all the 0s in the array towards the end of the array. It can also be looked at as pushing all the non-zero elements in the array towards the beginning of the array. 

This can be one of the solutions to move all the zero at the end of array problem.

Overall logic is:

- Traverse an array from left to right. i.e., traverse the whole array and initialize a variable count whose value should be equal to zero.

- Check each element of the array whether it is equal to zero or not. If the element is not equal to zero, but that element at the count position of the array(arr[count]) and increment the value of count by one.

- After traversing the whole array fill the remaining positions of the array with zeroes.

 const arr = [0, 2, 1, 2, 0];
 let count = 0; //Initialize a variable count with a value equal to zero.

//Traverse an array and first move all non-zeroes element at the front.

 for (let num of arr) {
 if (num !== 0) {
 arr[count++] = num;
 }
 }

//Now, the remaining element is zero.
 while (count < arr.length) {
 arr[count++] = 0; //fill the remaining positions of the array with 0.
 }

 console.log(arr); // after moving all the 0 to at the end this will log [𝟮, 𝟭, 𝟮, 𝟬, 𝟬]

//----------------------------------------------------------------------------------------------------------------------------------------------------------

Array.prototype.skip = function (arg){
    let array = this;
    
    // if(typeof arg === 'functions'){
    //     return array.filter((num)=> !arg(num))
    // } else {
    //     return array.filter((num)=> num!==arg)
    // }
    if (typeof arg === "function") {
      return array.filter((num) => !arg(num));
    } else {
      return array.filter((num) => num !== arg);
    }
}

let res1 = [1,1,2,3,4].skip(1);
let res2 = [1,1,2,3,4].skip((num)=>num<3);

console.log(res1);  [ 2, 3, 4 ]
console.log(res2);  [ 3, 4 ]
