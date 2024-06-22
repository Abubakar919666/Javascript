// try {
//     let message = prompt("what is the message");
//     alrt (msg);
// } catch (error) {
//     console.error(error);
// }

// console.log("hello mars");
function messege() {
  console.log("this is messege");
}

try {
  setInterval(() => {
    messege();
  }, 2000);
} catch (error) {
  console.log(error);
}
