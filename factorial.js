const factorial = (inputNum) => {
    let factorial = 1;

    for(let i=1;i<=inputNum;i++){
        factorial *= i;
    }

    return factorial;
}

//test cases
console.log(factorial(3))
console.log(factorial(10))