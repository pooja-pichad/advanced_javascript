// var car={
//     registration="mh6888",
//     carModel="toyota",
//     displatdetails=function(ownerName){
//         console.log(ownerName+",this is your car "+this.registration+" "+this.carModel)
//     }
// }
// var carDetails=car.displayDetails(car,"pooja")



var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}

// Example of passing arguments with bind():

var myCarDetails = car.displayDetails.bind(car, "Vivian"); 
console.log(myCarDetails)
// Vivian, this is your car: GA12345 Toyota
