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
