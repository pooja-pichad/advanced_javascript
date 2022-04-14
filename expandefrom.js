const a=require("readline-sync")
const num=a.questionInt("enter a number ")
const exapndedfrom=num=>{
    const numstr=String(num);
    let res =' ';
    for (let i=0;i<numstr.length;i++){
        const placevalue=(numstr[i])*Math.pow(10,(numstr.length-1-i));
        if(numstr.length-i>1){
            res+=`${placevalue}+`
        }else{
            res+=placevalue
        }
    }
    return res
};
console.log(exapndedfrom(num))

//***** with out function


const numstr=String(num)
let res =' '
for (let i=0;i<numstr.length;i++){
    const place=(numstr[i])*Math.pow(10,(numstr.length-1-i))
    if(numstr.length-i>1){
        res+=`${place}+`
    }else{
        res+=place
    }console.log(res)
}console.log(num)