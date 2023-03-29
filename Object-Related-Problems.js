const obj = Object.assign({ name: "JavaScript"}, {name: "ECMA"}, {name: "LiveScript"});

const result = obj.name;
console.log(result);                  // LiveScript

Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. 
The Object.assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

2) let x ={
    y: 'z',
    print:()=> {
       return this.y ==="z"; 
    }
}

console.log(x.print());  

Answer: false
Reason: There is no binding of 'this' with arrow function
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

3) const obj = {name :'jack',age:27}
const a= 'name' in obj;
console.log(a)  

ans : true 
‘name’ in obj checks for whether or not the property ‘name’ is in the object obj, returning true if the property exists and false if the property does not exist. 
Since, the property ’name’ does exist in the object obj, true will be printed to the console.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
 4) let players = [
        { name:"VK", role:"Batsman"},
        { name:"HP", role:"All-Rounder"},
        { name:"RJ", role:"All-Rounder"},
    ];

    let result = players.some((player)=>{
        return player.role === "Batsman";
    })

    console.log(result)   

    ans : true 
    
    True, simply because array some method takes a callback function as an argument, that callback function is executed once for every element, so it returns true if atleast one of the array elements matches the criteria. Then it stops.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    
