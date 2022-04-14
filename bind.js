var friend1={
    firstname:"pooja",
    lastname:"pichad"
}
var friend2={
    firstname:"pihu",
    lastname:"hindole"
}
function invite(greet1,greet2){
    console.log(greet1+' '+this.firstname+' '+this.lastname+' '+greet2)
}
var invitefriend1=invite.bind(friend1)
var invitefriend2=invite.bind(friend2)
invitefriend1("hello","how are you ")
invitefriend2("hello","how are you ")