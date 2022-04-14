//constructor



// function add(name,age){
//     this.name
//     this.age

// var a={name:age}
// console.log(a)
// }
// add("ppoja",34)


//javscrpts module

// var a="pooja"
// var b="pichad"
// console.log(`${a} ${b}`)

// var a=[1,2,3,4]
// var b=[7,8,9]
// var c=a,b
// console.log(c)


//spread operator
// function add(a,b){
//     c=[a+b]
// }
// add([1,2,3,4,5],[6,7,8,9])
// console.log(c)

//call method
// var car={
//     resistrno:"MH123",
//     brand:"toyota",
//     display:function sum(ownerName){
//         console.log(ownerName+this.resistrno+"this is your car "+this.brand)
//     }
// }
// var cardetails=car.display.call(car,"pooja")
// console.log(cardetails)


// var car={
//     resistrno:"MH123",
//     brand:"toyota",
//     display:function sum(ownerName){
//         console.log(ownerName+this.resistrno+"this is your car "+this.brand)
//     }
// }
// var cardetails=car.display.apply(car,["pooja"])
// console.log(cardetails)


//bind
// friend1={name:"pooja",
//         age:34
// }
// friend2={name:"priya",
//         age:22
// }
// function person1(friend1,friend2){
//     console.log(friend1+this.name+friend1+this.name)
// }
// var invite=person1.bind(friend1)
// console.log(invite)

