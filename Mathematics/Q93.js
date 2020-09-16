const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var inputs = Number(userInput[0]);
    var shuffle_num = 1;
    if(inputs<=1000000){
        if(inputs === 0 || inputs ===1){
            console.log(inputs);
        } else {
            for(let ind=inputs; ind>=1; ind--){
                
            shuffle_num = shuffle_num*ind;
            
        }
        console.log(shuffle_num);
    }
    
    }
});
    
    
    
    