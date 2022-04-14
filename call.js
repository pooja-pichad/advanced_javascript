// var friend1={firstname:"pooja",
//               lastname:"pichad"              
//             }
// var friend2={
//     firstname:"pihu",
//     lastname:"hindole"
// }      

// function invite(greeting1,greeting2){
//     console.log(greeting1+''+this.firstname+' '+this.lastname+' '+greeting2)
// }
// invite.call(friend1,'hey whats up  ')
// invite .call(friend2,"hey wahts up?  ")


// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota",

//     displayDetails: function(){
//         console.log(this.registrationNumber + " " + this.brand);
//     }
// }
// car.displayDetails()

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

// We can use the apply() function:

displayDetails.call(car, ["Vivian"]); 
// Vivian, this is your car: GA12345 Toyota
