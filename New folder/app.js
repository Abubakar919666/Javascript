// let human = {
//     userName : 'haider',
//     haider : `haider is full stuck developer`,
//     ismarried : true
// }

// let arr = [];
// for (let prop in human ){
//     // console.log(human[prop]);
//     let obj = { [prop]: human[prop] };
//     arr.push(obj);

// }
// console.log(arr);



// let keyName = prompt("enter your key name ");
// let keyvalue = prompt("enter your object value");
// let newobj = {
//     [keyName]: [keyvalue]
// }

// console.log(newobj);

// function Car(carName) {
//     this.carName = carName;
// }

// let car1 = new Car("Toyota");
// console.log(car1);








function Student(name, rollNum, isFeePaid, subjects) {
    this.name = name;
    this.rollNum = rollNum;
    this.isFeePaid = isFeePaid;
    this.subjects = subjects;
}
// Student.prototype.subjects = ["HTML", "CSS", "JavaScript"];

let student1 = new Student("Haider", 2643, true, "html");
let student2 = new Student("Abdullah", 2644, false, "css");
let student3 = new Student("Muzammil", 2645, true, "javascript");

// student3.subjects = ["Python"];
// console.log(student3, student1, student2)

// delete student1.isFeePaid;
// console.log(student1);
// student1.specialQuota = true
// let allStudents = [student1, student2, student3];



delete student1.isFeePaid;
student1.specialQuota = true;
// // console.log(student1, student2, student3);

// console.log("specialQuota" in student1);
// console.log("isFeePaid" in student1);
// console.log("isFeePaid" in student2);



// console.log(student1);

// console.log("subjects" in student1);
// console.log(student1.hasOwnProperty("specialQuota"));
// console.log(student1.hasOwnProperty("isFeePaid"));



// let allStudents = [student1,  student2,  student3];
// for (let i = 0; i < allStudents.length; i++) {
//     let student = allStudents[i];
//     if ("isFeePaid" in student) {
//         if (student.isFeePaid) {
//             console.log('Thanks for fee.');
//         }
//         else {
//             console.log('Please clear your dues.');
//         }
//     }
//     else if ("specialQuota" in student) {
//         console.log('Dil lga k parho.');
//     }
// }



// console.log(student1);
// let allValues = Object.values(student1, student2, student3);
// console.log(allValues.includes("Haider"));


// let currentURL = location;
// console.log(currentURL.pathname);

let newURL = prompt('enter a URL with protocol.');
location = newURL;


console.log(newURL);