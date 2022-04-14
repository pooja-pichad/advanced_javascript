// const promise = new Promise((resolve, reject) =>
//         resolve('I am a resolved promise')
// );
// promise.then(result=>console.log("yes"))


// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');
    
//     setTimeout(f1, 0);
    
//     new Promise((resolve, reject) =>
//         resolve('I am a promise')
//     ).then(resolve => console.log(resolve))
    
//     f2();
// }

// main();



// function f1() {
//     console.log('f1');
//    }
   
//    function f2() { 
//        console.log('f2');
//    }
   
//    function f3() { 
//        console.log('f3');
//    }
   
//    function main() {
//      console.log('main');
   
//      setTimeout(f1, 50);
//      setTimeout(f3, 30);
   
//      new Promise((resolve, reject) =>
//        resolve('I am a Promise, right after f1 and f3! Really?')
//      ).then(resolve => console.log(resolve));
       
//      new Promise((resolve, reject) =>
//        resolve('I am a Promise after Promise!')
//      ).then(resolve => console.log(resolve));
   
//      f2();
//    }
   
//    main();



// let a=[1,2,4,6]
// var b=a.map(function(value){
//   return value*4
// })
// console.log(b);



// let a=[1,2,3,4,5]
// var b=a.filter(function(c){
//   return c<5
// })
// console.log(b)


// let a=[1,2,3,4]
// var b=a.reduce(function(c,d){
//   return c*d
// })
// console.log(b)


// var a=new Promise((reslove,reject)=>{
//   let a='true'
//   if(a=='true'){
//     reslove(a)
//   }
//   else{
//     reject('error')
//   }
// }).then((a)=>{
//     console.log(a)

// }).catch((error)=>{
//   console.log(error)
// })



//positive negatuve
// for(var i=0;i<10;i++){
//     if(i%2==0){
//         console.log(-i)
//     }
// }


//****call


// (function(){
//     var a = b = 3;
//   })();
  
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));
  
//   Hide answer


// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }
//   foo();
//   console.log(typeof a); // => ???
//   console.log(typeof b); // => ???
  
  
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1);
}
console.log(numbers); // => ?