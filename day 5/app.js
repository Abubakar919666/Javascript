// Array

//  Basic understanding of Array
    const myArr = [0, 1, 2, 3, 4, 5]
    const myHeors = ["shaktiman", "naagraj"]

    


// Access the first Value of array 
    const myArr2 = new Array(1, 2, 3, 4)
    console.log(myArr[1]);




// Array methods

// Push method
    myArr.push(6)
    myArr.push(7)




// pop method
    myArr.pop()




// unshift method
    myArr.unshift(9)




// shift method
    myArr.shift()




// includes method 
    console.log(myArr.includes(9));     
    

    
    
// indexoff method
    console.log(myArr.indexOf(3));




// join method
    const newArr = myArr.join()
        console.log(myArr);
        console.log( newArr);




// Slice vs splice

    console.log("A ", myArr);

    const myn1 = myArr.slice(1, 3)

    console.log(myn1);
    console.log("B ", myArr);


    const myn2 = myArr.splice(1, 3)
    console.log("C ", myArr);
    console.log(myn2);





// Push methods
    const marvel_heros = ["thor", "Ironman", "spiderman"]
    const dc_heros = ["superman", "flash", "batman"]
    
    marvel_heros.push(dc_heros)
    
    console.log(marvel_heros);
    console.log(marvel_heros[3][1]);
    



// Concate method
    const allHeros = marvel_heros.concat(dc_heros)
    console.log(allHeros);
    
    const all_new_heros = [...marvel_heros, ...dc_heros]
    
    console.log(all_new_heros);


    

// Flat method
    const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
    
    const real_another_array = another_array.flat(Infinity)
    console.log(real_another_array);
    
    


// isArray method 
    console.log(Array.isArray("Hitesh"))
    console.log(Array.from("Hitesh"))
    console.log(Array.from({name: "hitesh"})) // interesting




//  of method
    let score1 = 100
    let score2 = 200
    let score3 = 300
    
    console.log(Array.of(score1, score2, score3));