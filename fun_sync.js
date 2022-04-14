// function f1(){
//     console.log("f1 is starting")
    
// }
// function f2(){
//     console.log("f2 is medial")
// // 
// }
// function f3(){
//     console.log("f3 is ending")
// }
// f1()
// f2()
// f3()


// function f1(){
//     console.log("its satrt")
// }
// function f2(){
//     setTimeout(function(){
//         console.log("its midal")
//     },2000)
//     console.log("its end")
//     // f1()
// }
// f1()
// f2()


function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    f2();
}

main();