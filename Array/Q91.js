const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let inputs1 = userInput[0].split(' ');
let count = 0;

for(let i = 0 ; i<inputs1.length; i++){
if(inputs1[i] === "GUVI" & inputs1[i] === "GEEK" || inputs1[i] ==="GUVIGEEK" ){
    count++;
}
}

if(count>=1){
    console.log("yes");
} else {console.log("no");}

});