if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback, arg) {
    let filteredArray = []; 
    for (let i = 0; i < this.length; i++) {
      if (callback.call(arg, this[i], i)) {
        filteredArray.push(this[i]); // Add the element to the filtered array if the callback returns true
      }
    }
    return filteredArray; // Return the filtered array after the loop has finished
  };
}

const va = (ele)=>{
   return ele % 2 === 0;
}
const array = [1,2,3,4,5,6,7,8];
console.log(array.filter(va)) //[ 2, 4, 6, 8 ]
