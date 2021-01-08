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
  var ticket_num = userInput[1].split(' ').map(value => value);
  let k = parseInt(userInput[2]);
  
  let dis_arr = "";
  
  for (let ind=0; ind<ticket_num.length; ind++)
  {
    if(ticket_num[ind]%k === 0)
    {
     dis_arr += 1 +  " ";
    }
    else{
       dis_arr += 0 +  " ";
    }
  }

  console.log(dis_arr.trim());
});
