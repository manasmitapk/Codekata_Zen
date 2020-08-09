const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
  
  var n = userInput[0];
  var myarr = userInput[1].split(' ').map(value => value);
  let sumArr = 0;
  
  for (let ind=0; ind<myarr.length; ind++)
  {
      sumArr += Number(myarr[ind]);
  }
console.log(sumArr);
    if((sumArr%2)===0 &&(sumArr%3)===0 &&(sumArr%5)=== 0)
    {
        console.log("1");
    }
    else
        console.log("0");
});
