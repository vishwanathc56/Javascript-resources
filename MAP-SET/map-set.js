const str = "aaaaaabbcc";
let map  = new Map();
let res='';

for(let char of str){
    if(map.get(char)){
        let count = map.get(char);
        map.set(char, count+1);
    }else{
        map.set(char,1)
    }
}

for(let [key, value] of map){
    res += key+value;
}

console.log(res);

ans : a6b2c2

Use a Map object to store the frequency of each character in the input string. The first loop iterates over each character in the input string and updates the frequency count in the Map object. The second loop iterates over each key-value pair in the Map object and constructs the compressed string by concatenating each key and its corresponding value.
In this case, the input string "aaaaaabbcc" contains 6 "a"s, 2 "b"s, and 2 "c"s. The program builds a new string with the character counts, resulting in the output "𝗮𝟲𝗯𝟮𝗰𝟮".

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
