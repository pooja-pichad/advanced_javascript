//three steps of promises
//1.pending
//2. reslove
//3.reject


//***&&&&&   RESOLVE//

// const pobj1=new Promise((reslove)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4]
//         reslove(roll_no)
//     },2000)
// })
// pobj1.then((rollno)=>{
//     console.log(rollno)

// })

//****&&& REJECT */
// const pobj1=new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4]
//         
//         reject("error while communication")
//     },2000)
// // })

// })
// pobj1 .catch((error)=>{
//     console.log(error)
// })

//****** reslove reject both */

const pobj1=new Promise((reslove)=>{
        setTimeout(()=>{
            let roll_no=[1,2,3,4]
            reslove(roll_no)
        },2000)
    })
    const getbiodata=(indexdata)=>{
        return new Promise((reslove,reject)=>{
            setTimeout((indexdata)=>{
                let biodata={
                    name:"pooja",
                    age:22
                }
                reslove(`my roll no is ${indexdata}.my name is ${biodata.name} and i am ${biodata.age} year old`)
            },2000,indexdata)
        })
    }
    pobj1.then((rollno)=>{
        console.log(rollno)
        return getbiodata(rollno[1])
    
    }).then((kuchnahi)=>{
        console.log(kuchnahi)
    }).catch((error)=>{
        console.log(error)
    })
    