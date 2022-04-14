// const add = (x, y) => x + y;

// console.log(add(2, 4));

// 6



// let x = 2;

// const add = (y) => {
//   x += y;
// };

// console.log(add(4)); // x === 6 (the first time)




const impureDouble = (x) => {
    console.log('doubling', x);
  
    return x * 2;
  };
  
  const result = impureDouble(4);
  console.log({ result });
  