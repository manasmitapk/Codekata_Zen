const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var vals = userInput[1].split(" ").map(val => +val);
var res_arr = [];
for(i = 0; i < vals.length; i++)
{
    
    var current_element = vals[i];
    var current_index = i;
var flag = 0;
for(current_index; current_index < vals.length ; current_index++)
{
    
    if(current_element > vals[current_index+1] )
    {
        res_arr.push(vals[current_index+1]);
        flag++;
        break;
    }
  }
  
if(flag != 1)
{
  res_arr.push(-1);   
}


}
console.log(res_arr.join(" "));
});