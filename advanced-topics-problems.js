function mul(x){
    return function (y){
        return [
            x*y, 
            function (z) {
                return x*y*z;
            }
        ]
    }
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));

ans : 6 24
//---------------------------------------------------------------------------------------------------------------------------------------------------------
