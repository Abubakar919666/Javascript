// for number
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = num.reduce((total, item) =>{
//   return total+item;
// }, 0)

// console.log(sum);



// // for string ..
// let str = "hello world";
// //str = str.split("").reverse().join("");


// str = str.split("");
// str = str.reduce((reversestr,  chr) =>{
//   // return chr + reversestr ;
//   return reversestr + chr ;
// }, "");
// console.log(str);




let str = "the quick brown fox jumps over the lazy dog";
let vowels = ["a", "e", "i", "o", "u"];

let vowelscount = str.split("").reduce((count,  chr) =>{
  // return vowels.includes(chr) ? count + 1 : count;
  if (vowels.includes(chr)) {
      count + 1 
  } else {
   return count  
  }
}, 0);

console.log(vowelscount);