

const animals = [
    {
        name: 'Dog',
        Legs: 4
    },
    {
        name: 'Cat',
        Legs: 40
    },
    {
        name: 'Fish',
        Legs: 0
    }
]

// Basic Array
const [animal1] = animals;
console.log(animal1); { name: 'Dog', Legs: 4 } 

const [animal1, cat] = animals;
console.log(cat); { name: 'Cat', Legs: 40 } 

// Array with default
const [dog, cat, fish, bird = 'Jon'] = animals;
console.log(bird); Jon

// Array with ignore    
const [, cat] = animals;
console.log(cat); { name: 'Cat', Legs: 40 }

const [, , fish] = animals;
console.log(fish); { name: 'Fish', Legs: 0 }

//Array with rest
const [dog, ...rest] = animals;
console.log(rest);[{ name: 'Cat', Legs: 40 }, { name: 'Fish', Legs: 0 }]

const [, cat, ...rest] = animals;
console.log(rest);[{ name: 'Fish', Legs: 0 }] 

// Function
function greeting(args) {
    return console.log(`He is ${args.name} who is ${args.age} old`);
}

//  greeting({name:"jon", age:55}); // He is jon who is 55 old

function greeting({ name, age }) {
    return console.log(`He is ${name} who is ${age} old`);
} 

// greeting({name:"jon", age:55}); // He is jon who is 55 old

function greeting({ name = 'jane', age = 50 } = {}) {
    return console.log(`He is ${name} who is ${age} old`);
} 

 greeting(); // He is jane who is 50 old

 greeting({name:"jon"}); //He is jon who is 50 old


// Function rest
function greeting({ name, ...rest }) {
    return console.log(`He is ${name} who is ${rest} old`);
} 

// greeting({name:"jon", age:55, country: 'India'}); //He is jon who is [object Object] old

function greeting({ name, ...rest }) {
    return console.log(`He is ${name} who is ${rest.age} old`);
} 

// greeting({name:"jon", age:55, country: 'India'}); //He is jon who is 55 old

function greeting({ country, ...rest }) {
    return console.log(`He is ${country} who is ${rest.age} old`);
} 

// greeting({ name: "jon", age: 55, country: 'India' }); //He is India who is 55 old

