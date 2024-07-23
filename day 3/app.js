//  ================  Control Flow (if...else statements, switch statements, loops) ================= \\


// If Statement :
    const temperature = 41

    if ( temperature === 40 ){
        console.log("less than 50");
    } else {
    console.log("temperature is greater than 50");  
    }



// Comperison Operator :
// <, >, <=, >=, ==, !=, ===, !==



// difference between "var" & {"let", "const"} regarding scope.
    const score = 200

        if (score > 100) {
            let power = "fly"
            console.log(`User power: ${power}`);
        }
    // console.log(`User power: ${power}`);


    
// Implicit scope ::
    const balance1 = 1000

    // if (balance1 > 500) console.log("test")
    // console.log("test2");



// Nested If-Else Statements ::
    const balance = 1000
        if (balance < 500) {
            console.log("less than 500");
        } else if (balance < 750) {
            console.log("less than 750");
        } else if (balance < 900) {
            console.log("less than 750");
        } else {
            console.log("less than 1200");
        }



// practical use case mentioned ::
    const userLoggedIn = true
    const debitCard = true
    const loggedInFromGoogle = false
    const loggedInFromEmail = true

        if (userLoggedIn && debitCard && 2==3) {
            console.log("Allow to buy course");
        }

        if (loggedInFromGoogle || loggedInFromEmail) {
            console.log("User logged in");
        }




// switch case statement (useful in redux) ::
// Basic santax
    // switch (key) {
    //     case value:
            
    //         break;

    //     default:
    //         break;
    // }

    const month = "march"
        switch (month) {
            case "jan":
                console.log("January");
                break;
            case "feb":
                console.log("feb");
                break;
            case "march":
                console.log("march");
                break;
            case "april":
                console.log("april");
                break;

            default:
                console.log("default case match");
                break;
        }





// "truthy" & "falsy" values ::

    const userEmail = []

    if (userEmail) {
        console.log("Got user email");
    } else {
        console.log("Don't have user email");
    }



// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}



// Empty array check
    if (userEmail.length === 0) {
        console.log("Array is empty");
    }



// Empty object check
    const emptyObj = {}

    if (Object.keys(emptyObj).length === 0) {
        console.log("Object is empty");
    }



// nullish coalescing operator (??) ::

    let val1;   
//  val1 = 5 ?? 10



// null undefined

    val1 = null ?? 10
    val2 = undefined ?? 15
    val3 = null ?? 10 ?? 20
    console.log(val3);





// Terniary Operator ::

    // condition ? true : false

    const iceTeaPrice = 100
    iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




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

    for (let index = 1; index <= 20; index++) {
        if (index == 5) {
            console.log(`Detected 5`);
            break
        }
        console.log(`Value of i is ${index}`);
    }

    for (let index = 1; index <= 20; index++) {
        if (index == 5) {
            console.log(`Detected 5`);
            continue
        }
        console.log(`Value of i is ${index}`);
    }