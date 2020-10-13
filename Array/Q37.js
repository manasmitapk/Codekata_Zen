const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var new_arr = [];
var arr = userInput[0].split(" ");
var word_to_checked = userInput[1];

for(var x=0; x < arr.length; x++)
{
  if(word_to_checked === arr[x])  
    {
      new_arr.push(arr[x]);
    }
    
}
if(new_arr.length === 0){
    console.log("-1");
} else {
console.log(new_arr.length);
}
});