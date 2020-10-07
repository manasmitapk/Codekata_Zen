const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var str1 = userInput[0].split('').sort().join("");
    var str2 = userInput[1].split('').sort().join("");
  
  if(str1.length === str2.length){  
   if(str1[0] === str2[0]){
       console.log("1");
   } else {
       console.log("0");
   }
} else {
    console.log("0");
}
});
    
    
    
    