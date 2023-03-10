1)//shallow cloning vs deep cloning

let original = { a: 1, b: { c: 2 } };

let shallowCopy = {...original}
//console.log(shallowCopy)  { a: 1, b: { c: 2 } }

let deepCopy = JSON.parse(JSON.stringify(original));
//console.log(deepCopy)     { a: 1, b: { c: 2 } }

original.b.c = 3;

console.log(original.b.c)

console.log(shallowCopy.b.c)
console.log(deepCopy.b.c)

// ans :  3,3,2



