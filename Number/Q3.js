const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var a  = userInput[1].split(" ");
var store_arr = [];
var i =0;
while(a.length > 0)
{
store_arr[i] = a.splice(0,3);
if(store_arr[i][3] === undefined)
{
    store_arr[i][3] = i+1;
}
i++;

}

function test(obj)
{
return obj[2] <= 1987  && (obj[1].toUpperCase() == "MARCH" || obj[1].toUpperCase() =="JANUARY" || obj[1].toUpperCase() == "MAY" || obj[1].toUpperCase() == "JULY" || obj[1].toUpperCase() == "AUGUST" || obj[1].toUpperCase() =="OCTOBER" || obj[1].toUpperCase() == "DECEMBER");
}

var result1 = store_arr.filter(test);
var final_result;
for(var x in result1)
{
    if(x == 0)
    {
       final_result = result1[x][3]; 
    }
    else
    {
    final_result = final_result+" "+result1[x][3];
    }
}

console.log(final_result); 

});