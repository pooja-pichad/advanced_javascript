const num = Math.ceil(Math.random() * 10);
const a=require("readline-sync")
console.log(num);
 const gnum = a.questionInt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);
   