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
4. Which one is the answer? 
  const Animal = ()=>{
    this.name = 'lion';
    this.getName = function(){
      console.log(this.name);
    };
  };

  let obj = new Animal();
  obj.name = 'tiger';
  obj.getName();

a. lion
b. undefined
c. tiger
d. Error

ans :  TypeError: Animal is not a constructor
//---------------------------------------------------------------------------------------------------------------------------------------------------------
3. What is the output of this code?
  
let cat = Object.create({ type:'lion'});
cat.size = 'large';
let copyCat = {...cat};
cat.type='tiger';
console.log(copyCat.type, copyCat.size);

ans : undefined large
//---------------------------------------------------------------------------------------------------------------------------------------------------------
2. What is the output of this code?
  
let channel ={name:'get to the point'};
channel.content = channel;
console.log(JSON.stringify(channel));

a. {“name” : “Get to the point”}
b. “{“name” : “Get to the point”}”
c. “ {“name” : “Get to the point”, “channel”: “{“name” : “Get to the point”}” ”
d. Error

ans: TypeError: Converting circular structure to JSON
//---------------------------------------------------------------------------------------------------------------------------------------------------------
1. Which one is the answer?
class ProgrammingLanguage {
static name = 'python';
sayHello() {
switch (this.name) {
case 'java':
console.log("System.out.print('hello');"); 
    break; 
case 'python': 
  console.log("print('hello') "); 
    break; 
case 'html':
console.log(' html is not programming language');
default:
console.log('No input provided');
}
}
}
let pl = new ProgrammingLanguage(); 
ProgrammingLanguage.name = 'java';

pl.sayHello();

a. System.out.print(‘hello’);
b. print(‘hello’)
c. No input provided
d. ReferenceError: sayHello is not defined

ans: 
//---------------------------------------------------------------------------------------------------------------------------------------------------------
