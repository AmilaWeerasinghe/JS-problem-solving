// given n number of steps -> find num of ways to climb n steps 
// can climb only 1 or 2 steps at a time
// thefore to climb n we can climb from step n-1 and n-2 ( back trace)
// way to climb n = ways to climb (n-2)+ ways to climb (n-1)

const numOfWaysToClimbStairs = (stairs) => {
    //base case
    if(stairs === 1) return 1;
    if(stairs === 2) return 2;

    return(numOfWaysToClimbStairs(stairs-2)+numOfWaysToClimbStairs(stairs-1));
}

console.log(numOfWaysToClimbStairs(4))

//Time complexity : O(2^n)
// recursions are simple to code but expensive in time complexity

// Method 2: one loop -> O (n)

const numofWays = (n)=>{
    const ways = [1,2];

    for (let i= 2;i<n;i++){
        ways[i]= ways[i-1]+ ways[i-2]
    }

    return ways;
}

console.log(numofWays(4));