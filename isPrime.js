let i=2; // start from 2
const isPrime = (x)=>{
    if (x===0 || x===1){
        return false;
    }

    if(i===x){
        return true;
    }

    if(x%i === 0){
        return false;
    }
    i++;

    //recursion
    return isPrime(i);
}

console.log(isPrime(12))