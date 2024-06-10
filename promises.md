```
//q1
console.log('start');

const promise1 = new Promise((resolve, reject) => {
   console.log(1);
   setTimeout(() => {
     console.log('Async operation completed');
     resolve('Operation successful');
   }, 1000);
});

console.log('promise1:', promise1);

setTimeout(() => {
  console.log('promise1 after 2 seconds:', promise1);
}, 2000);

console.log('end');

```
//output:   
start  
1  
promise1: Promise { <pending> }  
end  
Async operation completed  
promise1 after 2 seconds: Promise { 'Operation successful' }  

```
//q2

console.log('start');

const promise1 = new Promise((resolve, reject) => {
   console.log(1);
   resolve('Operation successful');
   console.log('Async operation completed');
});

console.log('promise1:', promise1);

promise1.then((result) => {
  console.log(result);
});

console.log('end');

```
//output:   
start  
1  
Async operation completed  
promise1: Promise { 'Operation successful' }  
end  
Operation successful  

```
//q3
console.log('start');

const promise1 = new Promise((resolve, reject) => {
   console.log(1);
   setTimeout(() => {
     console.log('Async operation completed');
     reject('Operation failed');
   }, 1000);
});

console.log('promise1:', promise1);

promise1.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

setTimeout(() => {
  console.log('promise1 after 2 seconds:', promise1);
}, 2000);

console.log('end');

```
//output:   
start  
1  
promise1: Promise { <pending> }  
end  
Async operation completed  
Operation failed  
promise1 after 2 seconds: Promise { <pending> }  

```
//q4
console.log('start');

const promise1 = new Promise((resolve, reject) => {
   console.log(1);
   // No resolve or reject call
});

console.log('promise1:', promise1);

promise1.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

setTimeout(() => {
  console.log('promise1 after 2 seconds:', promise1);
}, 2000);

console.log('end');

```
//output:   
start  
1  
promise1: Promise { <pending> }  
end  
undefined  
promise1 after 2 seconds: Promise { <pending> }  


