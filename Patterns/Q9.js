const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var input = parseInt(userInput[0]);
    
    for(let i=1; i<=input; i++){
          var l='';
        for(let k=(input-1); k>=i; k--){
          
            l += " ";
            //console.log(l);
        }
        var s= '';
        for(let j=1; j<=i; j++){
            s += "*";
        }
           //console.log(s);
        console.log(l+s.trim());
    }
   
   });
    
    
    
    