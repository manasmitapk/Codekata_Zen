const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on('close', ()=>{
    let myArr = userInput[1].split('');
    let newArr = myArr.filter(data =>{
        return myArr.filter(each => each==data).length == 1;
    });
    console.log(newArr.join(''));
});