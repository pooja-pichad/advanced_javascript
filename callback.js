const funA=()=>{
    setTimeout(function(){
        console.log("welcome funA")
    },3000)
}
const funB=()=>{
    console.log("welcome funB")
}
funA()
funB()