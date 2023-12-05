console.log(test)
// var with/without initialize returns 'undefined'
//let : without/with initilize ReferenceError: Cannot access 'test' before initialization
// const : without initialize SyntaxError: Missing initializer in const declaration
// const : with initialise ReferenceError: Cannot access 'test' before initialization

var test=9; 

//console.log(name)

function sayHi() {
    console.log(name);
    //console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
  
  sayHi();

  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }