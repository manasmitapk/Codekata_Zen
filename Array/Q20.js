const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
    let numInArr = userInput[0];
    let elementInArr = userInput[1].split(" ");
    let diffNum = userInput[2];
    
    let diffArr = [];
    let finalArr = [];
    
    //if negative is found return true (breaking loop)
  for(var arr of elementInArr){
  	if(arr < 0){
  	     
    for(let i=0; i<elementInArr.length; i++){
    
      if(elementInArr[i]>0){
       diffArr= diffArr.concat(elementInArr[i]-diffNum);
    } else {
        diffArr = diffArr.concat(elementInArr[i]);
    }
    }
    
    console.log(diffArr);
    for(let j=0; j<diffArr.length; j++){
        if(diffArr[j]<0){
            finalArr = finalArr.concat(diffArr[j]);
        }
    }
 console.log(finalArr.join(' '));
  	}
  	else
  {
      console.log('0');
}
  }
  
 //if no elements are negative return false
  
   

});