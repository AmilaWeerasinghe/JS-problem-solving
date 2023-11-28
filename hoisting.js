console.log(test)
// var with/without initialize returns 'undefined'
//let : without/with initilize ReferenceError: Cannot access 'test' before initialization
// const : without initialize SyntaxError: Missing initializer in const declaration
// const : with initialise ReferenceError: Cannot access 'test' before initialization

const test=9; 