// function sum(...theArgs) {
//     return theArgs.reduce((previous, current) => {
//       return previous + current;
//     });
//   }
  
//   console.log(sum(1, 2, 3));
  // expected output: 6


  function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
  }
  
  myFun("one", "two", "three", "four", "five", "six")
  
  