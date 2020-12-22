const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let sentence = userInput[0];
let sentenceLength = sentence.length;
let whiteSpaceCnt = 0;

for (let i=0; i<sentenceLength; i++) {
    if(sentence[i] == " ") {
        whiteSpaceCnt++;
    }   
}

console.log(sentenceLength - whiteSpaceCnt);
 
//end-here
});