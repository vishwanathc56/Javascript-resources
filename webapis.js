for (var i = 0; i < 5; i++) {
setTimeout(() => console.log(i), 0);
}
for (let j = 0; j < 5; j++) {
setTimeout(() => console.log(j), 0);
}

ans :  5 5 5 5 5 0 1 2 3 4

Because of scope, let and const have block scope and var has global or function scope.
in first loop, variable i declared with var keyword and i variable value is global. because loop is not enclosed with any function so i has global scope as of now. during the loop i incremented by 1 and updating and pointing the same variable ('i') in global memory. after loop execution i = 5 and setTimeout callback function will invoked. so first, second, third, fourth and fifth callback function will print 5 in console.

1 . i = 5;
setTimeOut(()=>console.log(i,0);

2. i = 5;
setTimeOut(()=>console.log(i,0);

3 . i = 5;
setTimeOut(()=>console.log(i,0);

4. i = 5;
setTimeOut(()=>console.log(i,0);

5. i = 5;
setTimeOut(()=>console.log(i,0);

after each loop iteration a setTimeout callback will set in callbacks or event queue and event loop push all these callback in call stack one by one as soon as the call stack is empty. in case of above loop have 5 callback in event or callback queue.

in second loop, variable i is declared with let keyword. variable declared with let or const have block scope. so during each iteration new block is created and i will have new value in each block. so setTimeout callback print new value in console.
0,1,2,3,4
