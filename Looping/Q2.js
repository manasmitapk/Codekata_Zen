const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
    let num = userInput[0].split(" ");

function getHCF( ) 
{ 
  
    // Minimum of the two numbers 
    let minimum = Math.min(num[0], num[1]); 
  
    // If both the numbers are divisible 
    // by the minimum of these two then 
    // the HCF is equal to the minimum 
    if (num[0] % minimum === 0 && num[1] % minimum === 0) 
        return minimum; 
  
    // Highest number between 2 and minimum/2 
    // which can divide both the numbers 
    // is the required HCF 
    for (let i = minimum / 2; i >= 2; i--) 
    { 
  
        // If both the numbers 
        // are divisible by i 
        if (num[0] % i === 0 && num[1] % i === 0) 
            return i; 
    } 
  
    // 1 divides every number 
    return 1; 
} 
  
// Driver code 
getHCF();
{ 

    console.log(getHCF(num[0],num[1])); 
} 
});