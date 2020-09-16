const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    var arr = userInput[1].split(" ").map(Number);
   
   const maxNum = Math.max(...arr) * 10;
   let divisor = 10;
   while (divisor < maxNum) {
      // Create bucket arrays for each of 0-9
      let buckets = [...Array(10)].map(() => []);
      // For each number, get the current significant digit and put it in the respective bucket
      for (let num of arr) {
         buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
      }
      // Reconstruct the array by concatinating all sub arrays
      arr = [].concat.apply([], buckets);
      // Move to the next significant digit
      divisor *= 10;
   }
   
   console.log(arr.join(' '));
});
    
    
    
    