const shortestJumpDistance = (inputArray) =>{
    let distance =0;
    console.log(inputArray);
    const sortedArray = inputArray.sort((a,b)=> a-b)
    console.log(sortedArray);
    const distancesFromZero = sortedArray.map((number)=> number+1);

    console.log('distanced from zero;',distancesFromZero)

    let longestUnDividedNumber =0;
    let longestCommonDiviser = 0;

    for(let i=0;i<distancesFromZero.length-1;i++){
        for(let j=i+1;j<distancesFromZero.length;j++){
            if(distancesFromZero[j]%distancesFromZero[i]===0){
                console.log('divi',distancesFromZero[i]);
                if(longestCommonDiviser<distancesFromZero[i] && distancesFromZero[i]%longestCommonDiviser !==0){
                    longestCommonDiviser = distancesFromZero[i];
                }
            } else {
                if(distancesFromZero[i]> longestUnDividedNumber){
                    longestUnDividedNumber = distancesFromZero[i];
                }
            }
        }
    }

    console.log('common',longestCommonDiviser)
    console.log('undived',longestUnDividedNumber);

    distance = longestCommonDiviser > longestUnDividedNumber ? longestCommonDiviser: longestUnDividedNumber;


    return distance;
}

console.log(shortestJumpDistance([2,7,5,9]))