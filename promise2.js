let promise=new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve("promise resolved")

    },2000)
    // console.log("promise resloved")
})
// console.log("promise resloved")
async function asyncfunc(){
    let result=await promise
    console.log(result)
    console.log("hello")
}
asyncfunc()