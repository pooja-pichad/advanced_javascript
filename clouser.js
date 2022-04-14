//outer function ko inner function mai call karta 

// const out=(a)=>{
//     let b=5
//     const inner =()=>{
//         console.log(a+b)

//     }
//     inner()
// }
// out(7)

const fs=require('fs')
const data={1:2,2:5}
const obj=JSON.stringify(data)
fs.writeFileSync("pooj.json",obj)

// console.log(b)