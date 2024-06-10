// Arrow function

// let obj = {
//   num : 5,
//   calculateSqure : () =>{
//     console.log(this.num * this.num);
//     console.log(this);
//   }

//   }

// let fruits = ["apple", "banana", "cherry", "grapes"];

// fruits.forEach((fruit, i) => {
//   if (condition) {
//   }
// // });





// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squareofNumbers = numbers.map(num => num * num);

// console.log(squareofNumbers);
 



// let userName1 =["haider","ghani","usman","ali"]
// userName1 = userName1.map(fName => fName.toUpperCase());
// console.log(userName1);




// let userName =["haider","ghani","usman","ali"]
// userName = userName.map(fName => fName[0].toUpperCase()+fName.slice(1));
// console.log(userName);



let alNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 , 17, 18, 20 ];

let divisibleby5and2 = alNum.filter(alNum => alNum % 5 === 0 && alNum % 2 === 0);
console.log(divisibleby5and2);