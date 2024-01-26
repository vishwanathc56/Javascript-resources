[jscafe](https://jscafe.dev/index.php/q3-flatten-an-array/)

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
