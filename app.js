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

    function getCard() {

        const values = ['2', '3','4','5','6','7','8','9','10','J','Q','K','A']

        const valuesIdx =  Math.floor(Math.random() * values.length);  // return a random item from the 'values' array

        //return idx; return the index of the item in the array

        const value = values[valuesIdx]; //returns the value of the index from the array

        const suites = ['clubs','hearts','spades','diamonds']

        const suiteIdx = Math.floor(Math.random() * suite.length);

        const suit = suites[suiteIdx];

        console.log(value, suit);//
    }
