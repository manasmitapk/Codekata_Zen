const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var a = userInput[0].split('');

var newArr = [];
var vowels = [];

for(let i=0; i<a.length; i++){
    if(a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u" || a[i] === "A" || a[i] === "E" || a[i] === "I" || a[i] === "O" || a[i] === "U" ){
        
        vowels.push(a[i]);
    } else {
        newArr.push(a[i]);
    }
}

if(newArr.length === 0){
    console.log("-1");
} else {
    console.log(newArr.reverse().join(""));
}
});
