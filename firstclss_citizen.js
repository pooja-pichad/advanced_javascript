//in javascripts we can assign a function to a varibale

// const thankyou=function(){
//     console.log("thanks for coming my life")
// } 
// thankyou()




//in object assign the value 

// const collage ={
//     name:"pooja",
//     qualif:function(){
//         console.log("i am complete my bsc")
//     }
// }
// collage.qualif()


//pass function as an argument 


// const myname=()=>{
//     return "hello"
// }
// const greeting=(sayali,name)=>{
//     console.log(sayali()+" "+name)
// }
// greeting(myname,"pooja")


//returnig function

function add(){
    return function bad(){
        console.log("i am girls ")
    }
}
add()()

//second way of calling function 
const c= add()

c();
