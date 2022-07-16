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
 
    function pick(arr) {   //function that picks a random element from an array
        //return a random element from arr
        const idx = Math.floor(Math.random() * arr.length);  

        return arr[idx];// return the index of the arr

    }

function getCard() {

    const values = ['2', '3','4','5','6','7','8','9','10','J','Q','K','A']

    const suits = ['clubs','hearts','spades','diamonds']

    // const value = pick(values); //return a random element from values arrray

    // const suite = pick(suits); // return a random element from suits array

    return {value: pick(values), suit: pick(suits)};

}


 