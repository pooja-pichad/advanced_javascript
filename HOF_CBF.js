const  add=(a,b)=>{
    return a+b;
}
const subs=(a,b)=>{
    return Math.abs(a-b)
}
const multi=(a,b)=>{
    return (a*b)
}
const calculator=(num1,num2,operator)=>{
    return operator(num1,num2)
}
console.log(calculator(5,6,add))
console.log(calculator(9,6,subs))
console.log(calculator(5,0,multi))