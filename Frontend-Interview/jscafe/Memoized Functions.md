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
