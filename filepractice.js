var fs=require('fs')
// fs.writeFile('pooja.txt',"hello",function(value){
//     console.log("saved")
// })

fs.open('pooja.txt','w',function(value){
    console.log("open")
})

// fs.writeFile('pooja.txt',"hello",function(value){
    // console.log("saved")
// })
// fs.appendFile('pooja.txt',"pooja",function(value){
//     console.log("append")
// })
// fs.rename("pooja.txt",'heelo.tx',function(value){
    // console.log("rename")
// })

// fs.unlink("heelo.txt",function(value){
//     console.log("deleted")
// })
fs.readFile('pooja.txt')
var a=fs.readFile("pooja.txt",function(value,err){
    console.log(a)
})



// // const fs = require('fs')
  
// fs.readFile('Input.txt', (err, data) => {
//     if (err) throw err;
  
//     console.log(data.toString());
// })