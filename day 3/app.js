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
    console.log(`User power: ${power}`);


    
// Implicit scope
    const balance1 = 1000

    // if (balance1 > 500) console.log("test")
    // console.log("test2");



// Nested If-Else Statements
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



// practical use case mentioned
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




// switch case statement (useful in redux):
// Basic santax
    switch (key) {
        case value:
            
            break;

        default:
            break;
    }

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