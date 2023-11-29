let a=1;
let b=2;

//async fetch
fetch('https://www.google.com').then(()=>{
    console.log('fetch');
})
//async
setTimeout(()=>{
    console.log('Async');
   },100)

console.log('Synchronous');

console.log(a);
console.log(b);



