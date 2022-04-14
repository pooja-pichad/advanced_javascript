let promise=new Promise(function(reslove,reject){
    setTimeout(function(){
        reslove('promise resloved')
    },4000)
})
async function asyncfun(){
    try{
        let result=await promise
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
asyncfun()