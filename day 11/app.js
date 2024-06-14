// for number
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = num.reduce((total, item) =>{
//   return total+item;
// }, 0)

// console.log(sum);




// for string ..
let str = "hello world";
//str = str.split("").reverse().join("");


str = str.split("");
str = str.reduce((reversestr,  chr) =>{
  // return chr + reversestr ;
  return reversestr + chr ;
}, "");


console.log(str);
