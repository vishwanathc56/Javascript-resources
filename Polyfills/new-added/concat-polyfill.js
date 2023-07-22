
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
