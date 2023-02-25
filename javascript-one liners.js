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
5)Get the current date and time:
  new Date().toString()
//--------------------------------------
6)Check if a variable is an array:
Array.isArray(variable)
//--------------------------------------
7)Check if a variable is an object:
typeof variable === "object"
//--------------------------------------
8)Convert an array to a string:
array.join(",")
//--------------------------------------
9)Check if a variable is a function:
typeof variable === "function"
//--------------------------------------
10)Convert an object to an array:
Object.values(object)
//--------------------------------------
11)Count the occurrences of an element in an array:
array.filter(x => x === element).length
//--------------------------------------
12)Create a new object with a dynamic key and value:
{ [key]: value }
//--------------------------------------
13)Check if a string is a palindrome:
string === string.split("").reverse().join("")
//--------------------------------------
14)Get the the sum of all the numbers in an array
array.reduce((a, b) => a + b, 0));
//--------------------------------------
15) Get the current timestamp:
Date.now()
//--------------------------------------
16)Check if a variable is null:
variable === null
//--------------------------------------
17)Check if a variable is undefined:
typeof variable === "undefined"
//--------------------------------------
18)Find the minimum value in an array
Math.min(...array)
//--------------------------------------
19) Check if an array is empty:
array.length === 0
//--------------------------------------
20)Create a new array with a specified range of numbers:
Array.from({ length: n }, (_, i) => i)

