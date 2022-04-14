var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

// We can use the apply() function:

displayDetails.apply(car, ["Vivian"]); 
// Vivian, this is your car: GA12345 Toyota
