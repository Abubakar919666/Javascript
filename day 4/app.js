// Loop ::
    
// if condition inside for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
        if (element == 5) {
            console.log("5 is best number");
        }
    console.log(element);

}
console.log(element);




// for loop inside for loop

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }
    
}




// array inside for loop

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        console.log(element);

    }



// keyword in loop (break and continue)

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}




// Understanding While Loop Execution
let index = 0;
    while (index <= 10) {
        console.log(`Value of index is ${index}`);
        index = index + 2
    }




// Understanding while Loope through Arrays 

let myArray1 = ["flash", "batman", "superman"];


let arr = 0;
    while (arr < myArray1.length) {
        console.log(`Value is ${myArray1[arr]}`);
        arr = arr + 1;
    }





// Do-While Loops Overview:
let score = 0;
    do {
        console.log(`Score is ${score}`);
        score++;
    } while (score <= 10);
