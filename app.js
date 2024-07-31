// //JavaScript
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   let name = 'John doe';
//   console.log(name)
// })


setTimeout(() => {
    console.log("Joel");
    setTimeout(() => {
        console.log("Victoria");
        setTimeout(() => {
            console.log("John");
            setTimeout(() => {
                console.log("Doe");
                setTimeout(() => {
                    console.log("Sarah");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);