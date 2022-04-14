//used for create an object 

let mobile=function(model_no){
    this.model_no=90
    this.price=300

}
var samsung=new mobile('galaxy')
var nokia=new mobile('234567')
mobile.prototype.colour='pink'
console.log(samsung)