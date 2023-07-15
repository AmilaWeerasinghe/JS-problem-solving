const countJewels = (stones, jewels) => {
    let AllStones = {}; // object inplace of a hashmap
    let AllJewels = 0;
    console.log("countJewels");

    console.log("stones",stones);
    console.log("jewels",jewels);

    //first store the stone in efficeint data structure
    for(let i=0;i<stones.length;i++){
        console.log("i",stones.charAt(i));

        //let's add the char and it's count as 1 but if previously existing we need to increase the count
        AllStones[stones.charAt(i)] ? AllStones[stones.charAt(i)]++ : AllStones[stones.charAt(i)] = 1;
    }

    console.log(AllStones);

    // now check the occurances of chars in the datastructure / hashtable/ object
    for(let j=0;j<jewels.length;j++){
        console.log("j",jewels.charAt(j));
        console.log(AllStones[jewels.charAt(j)]);
        AllJewels+= AllStones[jewels.charAt(j)];
    }

     console.log("AllJewels",AllJewels);

     return AllJewels;

}

export default countJewels;