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




// let str = "the quick brown fox jumps over the lazy dog";
// let vowels = ["a", "e", "i", "o", "u"];

// let vowelscount = str.split("").reduce((count,  chr) =>{
//   // return vowels.includes(chr) ? count + 1 : count;
//   if (vowels.includes(chr)) {
//       count + 1 
//   } else {
//    return count  
//   }
// }, 0);

// console.log(vowelscount);





// let str1 = "Saylani Mass Information Technology";
// let str2 = "Pakistan Telecommunication Company Limited";

// let str1Abbr = str1.split(" ").reduce(findAbbr, "");
// let str2Abbr = str2.split("  ").reduce(findAbbr, "");

// function findAbbr(abbr, words) {
//   return abbr + words[0];
// }

// console.log(str1Abbr, str2Abbr);





// .every method..
// let teamAges = [15, 16, 19, 22, 24];

// let eligible = teamAges.every((age) => age >= 15)
// console.log(eligible);  



// some method..
let teamAges = [15, 16, 19, 22, 24, 40];

let eligibleForGym = teamAges.some((age) => age >= 40)
console.log(eligibleForGym);                


