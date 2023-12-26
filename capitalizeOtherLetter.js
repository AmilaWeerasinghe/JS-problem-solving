// program to capitalize the every other letters in a String

// input => string

// letter => character

// Test cases
// 'hello' => 'HeLlO'
// 'hello???' => 'HeLlO???'
// 'ye llow' => 'Ye lLoW'
// 'HELLO' => 'HeLlO'

const capOtherLetter = (str) => {
    let capOtherString = '';

    // iterate through the str length
    for(let i=0;i< str.length;i++){
       if(i%2===0){
        capOtherString += str[i].toUpperCase();
       } else {
        capOtherString += str[i].toLowerCase();
       }
    }

    return capOtherString;
}

console.log(capOtherLetter('hello'));
console.log(capOtherLetter('hello???'));
console.log(capOtherLetter('ye llow'));
console.log(capOtherLetter('HELLO'));