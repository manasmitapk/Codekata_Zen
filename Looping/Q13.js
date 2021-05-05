const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let inputs = userInput[0].split('');

let evenArr =[];
let oddArr = [];



for(let i=0; i<inputs.length; i++){
    if(inputs[i]%2 === 0){
        evenArr.push(inputs[i]);
    } else{
        oddArr.push(inputs[i]);
    }
}


console.log(evenArr.sort().join(' '));
console.log(oddArr.sort().join(' '));

});