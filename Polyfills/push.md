```
function customPushMethod()
{
  if(this === null || this === undefined)
  {
    throw new TypeError('.push is not a function')
  }

  let length = this.length || 0;
  let argsLength = arguments.length; 
function customPushMethod()
{
  //First we will check the type of this
  if(this === null || this === undefined)
  {
    throw new TypeError('.push is not a function')
  }

  //Now if we know this is a type of 
  // object or array, we will find the length 
  let length = this.length || 0;
  let argsLength = arguments.length; 

//Now if we don't have any arguments to push 
//we have to change nothing, just we have to return the length
 if(!argsLength)
  {
    return length;
  }

   //looping till arguments array length is not finished
  for(let i = 0 ; i < argsLength ; i++)
  {
    this[length + i] = arguments[i]; //this -> array or object // i + length because we are pushing item in array 
//So if we have [1,2,3] then we have to start with index 3
  }

  this.length = length + argsLength; //adding the length to the arguments length
  return this.length;
}

 if(!argsLength)
  {
    return length;
  }

   //looping till arguments array length is not finished
  for(let i = 0 ; i < argsLength ; i++)
  {
    this[length + i] = arguments[i]; //this -> array or object // i + length because we are pushing item in array 
//So if we have [1,2,3] then we have to start with index 3
  }

  this.length = length + argsLength; //adding the length to the arguments length
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
