```
let obj = {
  name: 'Jack',
};

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
};

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function (obj, ...args) {
  let func = this;
  // Accepting arguments passed to newFunc
  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};

```
let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York') // Jack, a_random_id, New York



//------------------------------------------------------------------------------------------

```
function customBind(fn, context, ...args) {
  return function(...args2) {
    return fn.apply(context, [...args, ...args2]);
  };
}
```
// Example usage:
const obj = {
  name: "John",
};

function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const boundFn = customBind(greet, obj, "Hello");
boundFn("!"); // Output: Hello John!

const boundFnWithPunctuation = customBind(greet, obj, "Hi", "!!");
boundFnWithPunctuation(); // Output: Hi John!!
