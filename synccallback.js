// const addone=(n)=>{
//     return n+1
// }
// console.log(addone(3))



// const numbers = [3,4,10,20]
// const lesserThanFive = numbers.filter(num=>num <5)
// console.log(lesserThanFive)


const numbers = [3,4,10,20]
const getLessThanFive = num=>num <5
// Passing getLessThanFive function into filter
const lesserThanFive = numbers.filter(getLessThanFive)
console.log(lesserThanFive)