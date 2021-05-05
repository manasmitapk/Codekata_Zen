const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var pal_arr = [];

var ind = +userInput[0];

for(i=0; i<=ind; i++)
{
var num = i;
var temp = 0;
var last_digit =0;
var org_num = num; 
while(num > 0)
{
    
  last_digit = num % 10;
  num = parseInt(num / 10);
  temp = (temp *  10) + last_digit;

}
if(temp == org_num)
{
pal_arr.push(temp);
}

}
console.log(pal_arr.length-1);

});