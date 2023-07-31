// Custom implementation of the bind function
function customBind(fn, context, ...args) {
  return function(...args2) {
    return fn.apply(context, [...args, ...args2]);
  };
}

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
