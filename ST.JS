console.log('Smash taps');

class Person {

    constructor(name){
        this.name= name;
    }

 normalFunction() {
    setTimeout(function () {
        console.log('normal function',this.name)
    }, 100);
        
    }

    arrowFunction(){
        setTimeout(() => {
            console.log('arrow function',this.name)
        }, 100);
    }
}

//creating an object
const person = new Person('Bob');

//person.arrowFunction();
//person.normalFunction();

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

  //convert to an array
  const array = new Array(obj);
  //console.log(array);

  // use in built function to flatten an array
  const result = array.flat(); // make this flattening any level of nested array
  
  
  //console.log('Result',result);

  const isPalindrome = (inputChar)=> {
    let str = inputChar.toString();//becuase
    let resultWord = ''; 
    for(let i=str.length-1;i>=0;i--){
        resultWord+=str[i];
    }
    return (resultWord==str) ? true :false;
  }


  console.log(isPalindrome('RADAR'));
  console.log(isPalindrome('HELLO'));