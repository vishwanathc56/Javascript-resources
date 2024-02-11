
[jscafe](https://jscafe.dev/index.php/q4-flatten-deeply-nested-object/)
```
function flattenObject(obj, parent) {
    const finalObj = {}
    const generateFlatObjects = (obj, parent) => {
        for (let key in obj) {
            const newParent = parent+key
            const value = obj[key]
            if(typeof value === 'object') {
                generateFlatObjects(value, newParent+".")
            } else {
                finalObj[newParent] = value
            }
        }
    }
    generateFlatObjects(obj, parent)
    return finalObj
}
```


```
function flattenObject(obj, parent = '') {
    const finalObj = {};

    const generateFlatObjects = (obj, parent) => {
        for (let key in obj) {
            const newParent = parent ? parent + '.' + key : key;
            const value = obj[key];
            if (typeof value === 'object' && value !== null) {
                generateFlatObjects(value, newParent);
            } else {
                finalObj[newParent] = value;
            }
        }
    };

    generateFlatObjects(obj, parent);
    return finalObj;
}
```

```
const obj = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  };

console.log(flattenObject(obj, ""))

//{ A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }
```
