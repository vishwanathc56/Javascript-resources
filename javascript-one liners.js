1) Find the max value in an array:
  Math.max(...array)
//--------------------------------------
2) Remove duplicates from an array:
  [...new Set(array)]
//--------------------------------------
3)Generate a random number between 1 and 100:
  Math.floor(Math.random() * 100) + 1
//--------------------------------------
4)Check if a string is a valid number:
  !isNaN(parseFloat(string))
//--------------------------------------
2)Get the current date and time:
  new Date().toString()
//--------------------------------------
2)Check if a variable is an array:
Array.isArray(variable)
//--------------------------------------
2)Check if a variable is an object:
typeof variable === "object"
//--------------------------------------
2)Convert an array to a string:
array.join(",")
//--------------------------------------
2)Check if a variable is a function:
typeof variable === "function"
//--------------------------------------
2)Convert an object to an array:
Object.values(object)
//--------------------------------------
2)Count the occurrences of an element in an array:
array.filter(x => x === element).length
//--------------------------------------
2)Create a new object with a dynamic key and value:
{ [key]: value }
//--------------------------------------
2)Check if a string is a palindrome:
string === string.split("").reverse().join("")
//--------------------------------------
2)Get the the sum of all the numbers in an array
array.reduce((a, b) => a + b, 0));
//--------------------------------------
2) Get the current timestamp:
Date.now()
//--------------------------------------
2)Check if a variable is null:
variable === null
//--------------------------------------
2)Check if a variable is undefined:
typeof variable === "undefined"
//--------------------------------------
2)Find the minimum value in an array
Math.min(...array)
//--------------------------------------
2) Check if an array is empty:
array.length === 0
//--------------------------------------
2)Create a new array with a specified range of numbers:
Array.from({ length: n }, (_, i) => i)

