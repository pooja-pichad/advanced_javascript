// function decimal(n){
//     let binarynum=new Array()
//     let i=0;
//     while (n>0){
//         binarynum[i]=n%2
//         n=Math.floor(n/2);
//         i++;

//     }
//     for(let j=i-1;j>=0;j--){
//         console.log(binarynum[j])
//     }
// }

// let a=6;
// decimal(a)


// var i=0
// while (i<10){
//     console.log(i*2)
//     i++;
// }

function binarytodecimal(n){
let decvalue=0
let base=1
while(n){
    let last_digit=n%10;
    n=Math.floor(n/10);
    decvalue+=last_digit*base;
    base=base*2;
}
console.log(decvalue)
}
let n=10101001
binarytodecimal(n)