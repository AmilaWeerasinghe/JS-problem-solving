import testFun, {API_KEY, API_URL as url} from "./utils.js"

const combine = (a,b,c) => {
    return a *b /c;
}

combine(1,2,4);

testFun();
console.log(API_KEY, url)