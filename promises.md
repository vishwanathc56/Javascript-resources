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


