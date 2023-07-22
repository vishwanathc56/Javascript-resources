
Array.prototype.polyfillConcat = function() {
  const resultArray = [];

  const originalArray = this;
  
  for (let i = 0; i < originalArray.length; i++) {
    
    if (Array.isArray(originalArray[i])) {
     
      for (let j = 0; j < originalArray[i].length; j++) {
        resultArray.push(originalArray[i][j]);
      }
    } else {
      resultArray.push(originalArray[i]);
    }
  }

  for (let i = 0; i < arguments.length; i++) {
    const currentArg = arguments[i];
    if (Array.isArray(currentArg)) {
      for (let j = 0; j < currentArg.length; j++) {
        resultArray.push(currentArg[j]);
      }
    } else {
      resultArray.push(currentArg);
    }
  }

  return resultArray;
};
