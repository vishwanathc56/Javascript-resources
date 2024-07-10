//o(n2) and o(n+d) d=depth
function flatten(arr) {
  let flattened = [];
  
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flattened = flattened.concat(flatten(element));
    } else {
      flattened.push(element);
    }
  });
  
  return flattened;
}

//o(n) and o(d) d=depth
function flatten(arr) {
  const result = [];
  
  function helper(subArr) {
    subArr.forEach(element => {
      if (Array.isArray(element)) {
        helper(element);
      } else {
        result.push(element);
      }
    });
  }
  
  helper(arr);
  return result;
}


var input = [
  1, 2, 3,
   [4],
  [5, 6, [7], [8, [9, [10]]]],
  11, 12, 13,
  [14, [[[[[15, [16]]]]]]],
  17, 18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
 ];
  
var flatArray = flatten(input);
console.log(flatArray);
 // flatArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
