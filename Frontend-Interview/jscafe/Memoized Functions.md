### Memoized Functions | Zomato Frontend Interview Question 
[jscafe](https://www.youtube.com/watch?v=Mip6ejPRXko&list=PLe3J6mZBq1xUWVBMpSR2zpp8paWMJQ91b&index=2)

```
const memoise = (fn)=>{
  const cache = {}
  return (...args)=>{
   let str = JSON.stringify(...args);
   if(cache[str]){
      console.log(`fetching from cahce for args ${argsToString}`)
      return cache[str];
    }else{
       console.log(`computing values for args ${argsToString}`)
       onst result = fn.apply(this, args)
       return result;
    }
  }
}
```

usecase 

```
const addThreeNums = (a,b,c) => a+b+c
const add = memoize(addThreeNums)
console.log(add(1,2,3))
console.log(add(1,2,3))

const factorial = memoize((x) => {
    if (x === 0) return 1
    else return x * factorial(x-1)
})

console.log(factorial(5))
console.log(factorial(6))
```

### edgecase : if fn receiving non-JSON-serializable objects as arguments then 
```
const memoise = (fn) => {
  const cache = {};

  const customStringify = (args) => {
    return args.map(arg => {
      if (typeof arg === 'function') {
        return arg.toString(); // Convert functions to their source code
      } else if (arg instanceof Date) {
        return arg.toISOString(); // Convert Dates to ISO string
      } else {
        return JSON.stringify(arg); // Default to JSON.stringify for other types
      }
    }).join(',');
  };

  return (...args) => {
    let str = customStringify(args);

    if (cache[str]) {
      return cache[str];
    } else {
      const result = fn.apply(this, args);
      cache[str] = result;
      return result;
    }
  };
};

```
## &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 

```
const memoizeWithMap = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log(`Fetching from cache for args ${args}`);
      return cache.get(key);
    } else {
      console.log(`Computing result for args ${args}`);
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
};

// Example usage:
const slowFunction = (num) => {
  // Simulate a slow computation
  return num * num;
};

const memoizedFunction = memoizeWithMap(slowFunction);

console.log(memoizedFunction(5)); // Computing result for args 5
console.log(memoizedFunction(5)); // Fetching from cache for args 5

```
```
Advantages of using Map over plain objects:

Performance:

Map is generally faster for frequent additions and deletions compared to plain objects.
Map preserves the order of entries which can be beneficial in some use cases.

Key Types:
Map allows keys of any type (including objects and functions), whereas plain objects only allow strings or symbols as keys.

Built-in Methods:
Map provides a rich set of built-in methods (set, get, has, delete, etc.) that make it easier to work with.

No Prototype Inheritance:
Plain objects inherit from Object.prototype, which can sometimes lead to unexpected behavior if keys conflict with property names on the prototype chain. Map objects do not have this issue.
```
