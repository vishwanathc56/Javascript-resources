https://medium.com/@kalkidant/10-javascript-tricky-questions-to-prep-for-interviews-e78d18f8226d
//------------------------------------------------------------------------------------------------------------
10. What is the output of this code?
  let array = [{channelName:"letitbe"}, "js", 0,1];
  del array[1];
  console.log(array.length, "lebn")
ans: SyntaxError: Unexpected identifier
//------------------------------------------------------------------------------------------------------------
9. What is the output of this code?
  obj : {
    console.log(hello);
  }
a. ReferenceError: obj is not defined
b. Syntax error
c. hello
d. ReferenceError: hello is not defined

ans : ReferenceError: hello is not defined
//------------------------------------------------------------------------------------------------------------
8. What is the output of this code?
  let value1 = 2; 
  let value2 = 4;
  value1 = value1 + value2 * value2 / value1;
  console.log(value1);
ans : 10
//------------------------------------------------------------------------------------------------------------
7. Which one is the answer?
  function getY() {
    y = 7;
    console.log(y);
  }
  let y;
  getY();
a. undefined
b. ReferenceError: Cannot access ‘y’ before initialization
c. 7
d. None

ans: 7
//------------------------------------------------------------------------------------------------------------
