```
function customPushMethod()
{
  
  if(this === null || this === undefined)
  {
    throw new TypeError('.push is not a function')
  }

  let length = this.length || 0;
  let argsLength = arguments.length; 

//Now if we don't have any arguments to push  we have to change nothing, just we have to return the length

 if(!argsLength)
  {
    return length;
  }

  for(let i = 0 ; i < argsLength ; i++)
  {
    this[length + i] = arguments[i]; 
  }

  this.length = length + argsLength; 
  return this.length;
}

```

```
if (!Array.prototype.push) {
  Array.prototype.push = function(...items) {
    var len = this.length;
    for (let i = 0; i < items.length; i++) {
      this[len + i] = items[i];
    }
    return this.length;
  };
}
const array = [1, 2, 3];

array.push(4, 5);

// prints [1,2,3,4,5]
console.log(array);
```
