const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var rangevals = userInput[1].split(" ").map(val => +val);
var vals = userInput[3].split(" ").map(val => +val);
var freq_arr = {};
var result_arr = [];
for(i=0; i < rangevals.length; i++)
{
    if(freq_arr[rangevals[i]] === undefined)
    {
     freq_arr[rangevals[i]] = 0;   
    }
    freq_arr[rangevals[i]]++;
}

for(j in vals)
{
 var result = freq_arr[vals[j]]; 
 if(result != undefined)
 {
   result_arr.push(freq_arr[vals[j]]); 
}
 else
 {
   result_arr.push("Not Present"); 
 }
 

}
console.log(result_arr.join(" "));
//console.log(freq_arr);
//console.log(result_arr);
});