class Person {
    constructor(name){
        this.name =name;
    }

    printNameArrowFunction () {
        setTimeout(()=>{
            console.log('Arrow :'+ this.name); // object scope 
        },100)
    }

    printNameNormal() {
        setTimeout(function(){
            console.log('Normal :',this.name); // redefined to scope where this function is called,global because this is a call back (normal)
        },100)
    }
}

const person = new Person('Bob');
person.printNameArrowFunction();
person.printNameNormal();