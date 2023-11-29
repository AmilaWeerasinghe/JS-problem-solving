const alphabet = ['A','B','C','D','E','F'];
const numbers = ['1','2','3','4','5'];

const [a,,c,...rest] = alphabet;

console.log(a);
console.log(c);
console.log(rest);

//concatanate into single array
const newArray= [...alphabet,...numbers];

console.log(newArray)

const sumAndMultiply = (a,b)=> {
    return [a+b , a*b];
}

const [sum, multiplication] = sumAndMultiply(2,3);
console.log(sum);
console.log(multiplication);

// real power object destructing
const personOne = {
    name: "Amila",
    age: 27,
    address: {
        city: "Matale",
        state: "Sri lanka"
    }
}

const personTwo = {
    name: "Nimal",
    age: 61,
    address: {
        city: "Matale",
        state: "Sri lanka"
    }
}

// take properties into variables
const {name, age, address:{city}} = personOne;
console.log(name+ age);
console.log(city)

const personThree = {...personOne,...personTwo}
console.log(personThree)

const printUser = ({name,age, favouriteFood ="cake"}) => {
    console.log(`name is ${name}+ age is ${age}+ favourite food: ${favouriteFood}`);
}

printUser(personOne);