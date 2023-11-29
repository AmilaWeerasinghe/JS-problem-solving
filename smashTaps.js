console.log('SmashTaps');

const isPalindrome = (inputChar) => {
    let str= inputChar.toString();// string from the given phrase
    let resultWord = '';
    for(let i= str.length -1; i >= 0; i--){
        resultWord += str[i];
    }
    return (resultWord == str) ? true : false;
}

console.log(isPalindrome('RADAR'));
console.log(isPalindrome('Hello'));

var obj = {
    1: {
      title: 'Foo',
      value: 111,
      children: {
        2: {
          title: 'Bar',
          value: 222
        }
      }
    },
    3: {
      title: 'Baz',
      value: 333,
      children: {
        4: {
          title: 'Qux',
          value: 444,
          children: {
            5: {
              title: 'Quux',
              value: 555
            }
          }
        }
      }
    }
  }

  const {title, value} = obj;
  const result = JSON.stringify({...obj});
  
  
  console.log('Result',result);