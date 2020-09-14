const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = userInput[0].split(" ");
    var n = 1;
    var k = 1;
    var r = 1;
    if(inputs[1]<=inputs[0]<=10){
            for(let ind=inputs[0]; ind>=1; ind--){
                n = n*ind;
            }
             for(let ind=(inputs[0]-inputs[1]); ind>=1; ind--){
                k = k*ind;
            }
            for(let ind=inputs[1]; ind>=1; ind--){
                r = r*ind;
            }
        } 
    console.log(n/(k*r));

});
    
    
    
    