// Javascript program to check if two
// numbers are co-prime or not
 
// Recursive function to
// return gcd of a and b
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var inputs  = userInput[0].split(" ");

var a = inputs[0];
var b = inputs[1];
function __gcd(a, b)
{
     
    // Everything divides 0
    if (a === 0 || b === 0)
        return 0;
     
    // Base case
    if (a === b)
        return a;
     
    // a is greater
    if (a > b)
        return __gcd(a - b, b);
             
    return __gcd(a, b - a);
}
 
// Function to check and print if
// two numbers are co-prime or not
function coprime(a, b)
{
    if (__gcd(a, b) === 1)
        console.log("1");
    else
       console.log("0");    
}

coprime(a,b);
});