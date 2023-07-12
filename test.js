var numJewelsInStones = function(jewels, stones) {
    console.log("jewels",jewels);
    console.log("stones",stones);
    let Output = 0;
    const allStones = new Map();
    // iterate and store
    for (i=0;i<stones.length;i++) {
        if (allStones.get(stones.charAt(i)) && allStones.get(stones.charAt(i) >= 1)){
            allStones.set(stones.charAt(stones[i]), allStones.get(stones.charAt(i)+1));
        } else {
            // no previous search found
            //insert to hashmaps
            allStones.set(stones.charAt(stones[i]), 1);
        }   
    }
    // count only jewels O(n)
    for (j=0;j<jewels.length;j++) {
        if(allStones.get(jewels.charAt(j))) {
            // incement the total
            Output++;
        }
    }
    // return the value
    return Output;
}

const jewels = "aA";
const stones = "aAAbbbb";
const result = numJewelsInStones (jewels, stones);
console.log("result", result); // based on the input expected result should be 3
