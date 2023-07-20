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
//--------------------------------------------------------------------------------------------------------------------------------------------------
6. Which one is the answer?
let student = {
  name: "john",
  getName: ()=>{
    console.log(this.name);
  }
}
student.getName();

a. Jhon
b. Error
c. undefined
d. null

ans:  undefined
//---------------------------------------------------------------------------------------------------------------------------------------------------------

5. What is the output of this code?

let animals = [{type: 'lion'}, 'tiger'];
let clones = animals.slice();
clones[0].type = 'bear';
clones[1] = 'sheep';
console.log(animals[0].type, clones[0].type);
console.log(animals[1], clones[1]);

ans : bear bear
      tiger sheep
//---------------------------------------------------------------------------------------------------------------------------------------------------------
