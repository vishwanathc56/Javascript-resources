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
    5)const entries = [["name", "alice"], ["age", 30]];

        let obj = {};
        for(const [key, value] of entries){
            obj[key] = value;
        }
                    //OR 

        const obj = Object.fromEntries(entries);

        console.log(obj);   // { name: 'alice', age: 30 }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    6) const person = {
            name : "JC",
            age: 24,
            skill : {
                lang : "JavaScript",
            }
        }

        Object.freeze(person);

        let res1 = Object.isExtensible(person);
        let res2 =  Object.isExtensible(person.skill)

        console.log(res1);             // false
        console.log(res2);             // true
        
        
        As mentioned in an earlier post https://lnkd.in/dzGGtiHu. 
        The 𝗢𝗯𝗷𝗲𝗰𝘁.𝗳𝗿𝗲𝗲𝘇𝗲 method in JavaScript freezes or locks an object. This means new properties cannot be added to an object and existing properties cannot be set or deleted. This makes all non-inherited data properties read-only. Also, note that 𝗢𝗯𝗷𝗲𝗰𝘁.𝗳𝗿𝗲𝗲𝘇𝗲() 𝗺𝗲𝘁𝗵𝗼𝗱 𝗱𝗼𝗲𝘀 𝗻𝗼𝘁 𝗮𝗳𝗳𝗲𝗰𝘁 𝘁𝗵𝗲 𝗻𝗲𝘀𝘁𝗲𝗱 𝗼𝗯𝗷𝗲𝗰𝘁𝘀. 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    7) const person = {};

        Object.defineProperties(person, {
            name : {
                value: "jc",
                writable: true,
            },
            age : {
                value: 24,
                writable: false
            },
        });

        person.name = "VK",
        person.age = 34;

        console.log(person.name);  // vk
        console.log(person.age);   // 24
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    8) const example = ({ a, b, c }) => {
        console.log(a, b, c);
       };
       example(0, 1, 2);
        
        example(null, null, null); // TypeError: Cannot destructure property 'a' of 'object null' as it is null.

        const example = ({ a, b, c }) => {
            console.log(a, b, c);
        };

        example({ a: 0, b: 1, c: 2 });
        
        example({ a: null, b: null, c: null }); // This will work without error

        
        ans : undefined undefined undefined
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
   9) class Person {
    constructo(name){
        this.name = name
        }
    }

    Person.prototype.age = 24;

    const jayesh = new Person("JC");

     console.log(Object.hasOwn(jayesh, "name"));
     console.log(Object.hasOwn(jayesh, "age")); 

    ans : false false
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    10) All object have prototypes.
       a) true 
       b) false

    ans: true 

In JavaScript, every object has a prototype. A prototype is a mechanism through which objects in JavaScript inherit properties and methods from other objects.
When a new object is created in JavaScript, it automatically gets a prototype object assigned to it. The prototype object is accessible through the object's __proto__ property, which is a reference to the object's prototype.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

let x = { a: 1, b: 2 };
let y = { b: 3 };
let z = { ...x, ...y };
console.log(z);

ans : {a: 1, b: 3}


This code creates three objects: x, y, and z.
x is an object with two properties: a and b.
y is an object with one property: b.
z is a new object that combines the properties of x and y using the spread syntax (...). Since both x and y have a property named b, the value of the b property in y overwrites the value of the b property in x in the resulting object z.
When we log z to the console, we get the following output:
{ a: 1, b: 3 }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    const a = {b : { c : 3} };
    const b = {...a};
    a.b.c = 3; 
    console.log(b.b.c)

    ans : 3

     The answer for the above snippet is 3. because in at initialisation
        a will have {b: {c: 2} }
        the b is copying the with new reference in a of first level and shares the same reference in 2nd level, so
        b will be {b: {c: 2} }

        by modifying the values in a in 2nd level, it also affects the b which is sharing the same reference of a.

        so the object becomes {b: {c: 3} }

        it will acts differently if we directly change
        a.b={c:4}
        b.b={c:5}
        logging a.b.c will give 4 and b.b.c will give 5.
        coz a and b have seperate memory reference in 1st level

        if you want to have seperate memory reference for all levels of the clone/copy object then you can simply try

        cloneObject = json.parse(json.stringify(originalObject)||"{}"));


        note:
        {
        b : { //1st level
        c: 4 //2nd level
        }}

  
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        const obj1 ={ property1:'15'};
        const obj2 =Object.freeze(obj1);
        obj2.property1='20';
        console.log(obj2.property1);

        ans : 15
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        function MyObject() {}

        const obj = new MyObject()

        console.log(obj.__proto__ === Object.prototype)     //false
        console.log(obj.__proto__ === MyObject.prototype)   //true

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        let person = { name: 'Lydia' };
        const members = [person];
        person = null;
        console.log(members);

        ans : [ { name: 'Lydia' } ]

        In this code, we first create an object person with a name property of value 'Lydia'. We then create an array members and add the person object to it. This means that the members array contains a reference to the person object.
We then set the person variable to null, which means that the person variable no longer references the person object. However, the members array still contains a reference to the original person object.
Therefore, when we log the members array to the console, it still contains the original person object with the name property of value 'Lydia'.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    15) const obj = {name : 'javascript'};
        Object.defineProperty(obj, "name", {enumerable : false})

        console.log(Object.hasOwn(obj, 'name'));
        console.log(Object.keys(obj).includes('name'));

        ans: True,False

        exp : Object.hasOwn() can access given objects enumerable and non enumerable properties, whereas Object.key() can only access objects enumerable properties.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
