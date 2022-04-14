// a=[1,2,3,4,6]
// for(i in a){
//     console.log(a[i])
// }


// for(i of a){
//     console.log(i)
// }


// a={1:3,2:6,7:8}
// for (var i=0;i<a.length,i++;){
    // console.log(a[i])
// }


// for (i in a){
//     console.log(a[i])
// }


// a=[1,2,3,4,6,7,3,5,7]
// var i=0
// c=[]
// while(i<a.length){
//     b=a[i]
//     if(! a  .includes(i)){
//         c.push(i)
//     i++;
//     // console.log(c)
//     }
//     console.log(c)
// }


// const unique = (value, index, self) => {
//     return self.indexOf(value) === index
//   }
  
//   const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
//   const uniqueAges = ages.filter(unique)
  
//   console.log(uniqueAges)


// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
// const uniqueAges = [...new Set(ages)]

// console.log(uniqueAges)


// if(2==2){
//     console.log("bakava")
// }
// car_color="blue"
// if (3>2){
//     if(car_color=="balck"){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// }




// 

// function duplicates(a){
//     var arry = [];
//     for (var i = 0; i < a.length; i++) {
//         if (arry.indexOf(a[i]) === -1) {
//             arry.push(a[i]);
//         }
//     }
//   return arry;
// }
// var numbers = [1,2,3,2,3,4,5,3];
// var Unique=duplicates(numbers); 
// console.log(Unique)


//duplicate

// var a = [1,2,3,2,3,4,5,3];

// var arry = [];
// for (var i = 0; i < a.length; i++) {
//     if (arry.indexOf(a[i]) === -1) {
//         arry.push(a[i]);
//         }
//     }
//   console.log(arry)


// a,b=5,6
// if(a+b){
//     console.log("true")
// }
// else{
//     console.log("flase")
// }

// var a=9
// var b=9
// var c=a+b
// if(c>15 && c<20){
//     console.log(" 20")
// }else{
//     console.log("less 20")
// }

// second max

// a=[1,3,5,6,7,8]
// max=0
// second=0
// for (var i=0;i<a.length;i++){
//     if(max<a[i]){
//         if(second<max){
//             second=max
//         }
//     max=a[i]

//     }else{
//         if(second<a[i]){
//             second=a[i]
//         }
//     }
// }console.log(second)

//count element
// a=[1,2,3,2,5,9]
// c=0
// for (var i=0;i<a.length;i++){
//     c=c+1

// }console.log(c)


a=[["g","f","g"],["i","s"],["b","e","s","t"]]
// b=" "
// for(var i in a){
//     for(var j in a[i]){
//         // b=+" "

//         console.log(a[i][j])
//         // b=+" "
//     }
// }
// console.log(b)

// var i=0
// var add=''
// while(i<a.length){
//     j=0
//     while(j<a[i].length){
//         add=add+a[i][j]       ..............correct code
//         j++;
//     }
//     i++;
// }
// console.log(add)

// a=[1,2,3,5,4,6]
// var i=0;
// while (i<a.length){
//     b=a[i]
//     if(!a.includes(3)){
//         console.log(a)
//     }
// }


// a=["pooja","priya","isha"]
// for (i of a){
//     console.log(i)       //output element :pooja,priya,isha
// }`



// for(i in a){
    // console.log(a[i])   //output  index: 0 1 2
// }

// a={1:"pooja",2:"priya"}
// for(i in a){
//     console.log(i)   //output   keys  1,2
// }

// for(i in a){
    // console.log(a[i])   //output   values  priya pooja
// }


