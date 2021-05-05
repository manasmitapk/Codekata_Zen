const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let myArr = userInput[0].split("");
    //console.log(myArr);
    
    let s = 0;
    
    for(let i=0; i<myArr.length; i++){
        
        if(myArr[i]== 0 || myArr[i] ==1 || myArr[i] ==2|| myArr[i]==3 || myArr[i] ==4|| myArr[i] ==5|| myArr[i]==6|| myArr[i] ==7 || myArr[i] ==8|| myArr[i]==9 ){
            s += parseInt(myArr[i]);
        }
    }
    
    console.log(s);
    
    
});