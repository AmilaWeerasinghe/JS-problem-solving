const isPalindrome = (inputChars) => {
    // convert the input char set to a string
    let Str= inputChars.toString();

    let reverseWord ='';

    for (let i = Str.length-1 ;i >=0 ;i--){
        reverseWord += Str[i];
    }

    return (reverseWord == Str);
}

//test cases
console.log(isPalindrome('Hello'));
console.log(isPalindrome('AZA'))