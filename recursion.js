function sum(arr, n) {
    // Only change code below this line
    //base case
    if(n===0) return 0;
  
    // recursion -> recall arr with taking one element out and adding
    return sum(arr, n-1)+arr[n-1];
  
    // Only change code above this line
  }


  // Only change code below this line
function countdown(n){
    if(n<1) return [];
  
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
  // Only change code above this line
  console.log(countdown(5))

  function rangeOfNumbers(startNum, endNum) {
    if (startNum>endNum) return [];
  
    const numbers = rangeOfNumbers(startNum+1,endNum);
    numbers.unshift(startNum);
    return numbers;
  };
  