// let numberstore=[1,2,3,4]
// let newnumber=12
// numberstore=[...numberstore,newnumber]
// console.log(numberstore)

// var new_op={1:2,3:4}
// var old_op={6:7,9:0}
// new_op={...new_op,...old_op}
// console.log(new_op)



function sum(x,y,z){
    return x+y+z
}
const numbers=[1,2,4]
console.log(sum(...numbers))