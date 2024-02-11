[jscafe](https://jscafe.dev/index.php/q3-flatten-an-array/)

```
function flattenArray(arr) {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let nestedArray = flattenArray(arr[i]);
            for (let j = 0; j < nestedArray.length; j++) {
                flattened.push(nestedArray[j]);
            }
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
}
```


```
function flattenArray(arr) {
    return arr.reduce((prevVal, currentVal) => {
        if (Array.isArray(currentVal)) {
            prevVal = prevVal.concat(flattenArray(currentVal))
        } else {
            prevVal.push(currentVal)
        }
        return prevVal
    }, [])
}
```

console.log(flattenArray([[[1, [1.1]], 2, 3], [4, 5]]))
