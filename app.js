//alert('It Works')   ///asd


    //  function isPangram(sentence) {
    //     let loweCased = sentence.toLowerCase();
    //     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    //         if(loweCased.indexOf(char) === -1) {
    //         return false;
    //     }
    //  }
    //  return true;
    // }

    // function isPangram(sentence) {
    //     let loweCased = sentence.toLowerCase();
    //     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    //         if(!loweCased.includes(char)) {
    //         return false;
    //     }
    //  }
    //  return true;
    // }


//write a getCard function that returns random card and suite return both in an object

    // // { value : 'K'
    //       suit : 'clubs'
    //     }

    // function getCard() {

    //     const values = ['2', '3','4','5','6','7','8','9','10','J','Q','K','A']

    //     const valuesIdx =  Math.floor(Math.random() * values.length);  // return a random item index from the 'values' array

    //     //return idx; return the index of the item in the array

    //     const value = values[valuesIdx]; //returns the value of the index from the array

    //     const suites = ['clubs','hearts','spades','diamonds']

    //     const suiteIdx = Math.floor(Math.random() * suites.length);

    //     const suit = suites[suiteIdx];

    //    // console.log(value, suit);

    //     return {value: value, suit: suit}

    // }

//rewrite the function without repeating code (REFACTOR)
 
        //     function pick(arr) {   //function that picks a random element from an array
        //         //return a random element from arr
        //         const idx = Math.floor(Math.random() * arr.length);  

        //         return arr[idx];// return the index of the arr

        //     }

        // function getCard() {

        //     const values = ['2', '3','4','5','6','7','8','9','10','J','Q','K','A']

        //     const suits = ['clubs','hearts','spades','diamonds']

        //     // const value = pick(values); //return a random element from values arrray

        //     // const suite = pick(suits); // return a random element from suits array

        //     return {value: pick(values), suit: pick(suits)};

        // }



//Scopes

//the color variable's scope is just inside the function

    // function lol() {
    //     let person = 'Tom'
    //     const age = 45
    //     var color = 'teal'
    //     console.log(color)
    // }

    // function changeColor() {

    //     const age = 19
    //     var color = 'orange'
    //     console.log(color)
    // }

//block scope

    // if(true) {
    //     let animal = 'eel'    //let or const have scope in the block
    // }
    // console.log(animal)

    // if(true) {
    //     var animal = 'eel'      //var has scope outside the block too for if while for but not functions
    // }
    // console.log(animal)


//lexical scope

    // function outer() {
    //     let movie = 'Amadeus'

    //     function inner() {
    //         console.log(movie.toUpperCase()) // i have acces to movie let variable
    //     }                                    /* calling inner from outside the function outer does not work
    //                                             unless i call it inside the parent function 'outer' */
    //     inner()
    // }                                          /* variables from outer function can be called inside inner
    //                                             but not from the inner to the outer function 
    //                                             Scoope works from the inside to outside, if there are 2 vars with the same name
    //                                             it will first look inside the closest scope first
    //                                             */

//functions expression   -- functions storred in variables cos functions are objects

    // function add(x , y){                    //normal function
    //     return x + y
    // }

    // const sum = function ( x , y) {         //functions storred in a variable
    //     return x + y
    // }


//functions orders

    