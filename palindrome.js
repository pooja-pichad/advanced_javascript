function palindrome(name){
    var string=""
    const store=name
    for (let i=name.length-1;i>=0;i--) {
        string=string+name[i]
     }
     if (store===string) {
        console.log("its palindrome string")
     }
     else {
        console.log("it's not a palindrome string")
     }
     
}
palindrome(["sms"])

