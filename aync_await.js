// console.log("async and await working")
// async function para(){
//     console.log("inside para function ")
//     const response=await fetch('https://api.github.com/users')
//     console.log("before response")
//     const users=await response.json()
//     console.log("users resloved")
//     return users
// }
// console.log("before calling harry ")
// let a= para()
// console.log("after calling function ")
// console.log(a)
// a.then(data=>console.log(data))
// console.log("last line of this jd file")


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve(4*5), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     console.log(result); // "done!"
//   }
  
//   f();



// async function fun(){
//   console.log("b")
//   let a=await 5+4
//   console.log(a)
//   console.log("c")

// }
// console.log('end')
// fun()


// async function f() {

//       let promise = new Promise((resolve, reject) => {
//          resolve(4*5)
//       });
    
//       let result = await promise; // wait until the promise resolves (*)
    
//       console.log(result); // "done!"
//     }
    
//     f();
  
  