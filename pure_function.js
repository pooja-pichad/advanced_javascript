// Another Pure Way

// const pureAssoc = (key, value, object) => {
//   const newObject = { ...object };

//   newObject[key] = value;

//   return newObject;
// };

// const person = {
//   name: 'Bobo'
// };

// const result = pureAssoc('shoeSize', 400, person);

// console.log({
//   person,
//   result
// });


// const fruits = ["Banana", "Orange", "Apple"];

// console.log(fruits instanceof Array);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.unshift('Apple'));

// pure function

const add = (x, y) => x + y;

add(2, 4); // 6



//impure function



let x = 2;

const add = (y) => {
  x += y;
};

add(4); // x === 6 (the first time)

