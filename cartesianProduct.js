const arr1 = [1,2];
const arr2 = [3,4,5];

// cartesin product = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]

// apporoach: traverse through arrays => combine elements from first array with elements from second array


const cartesinProd = (arr1,arr2) =>{

    let cartesinProduct = [];
    for (let i=0;i <arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
        // console.log(arr1[i],arr2[j])
        cartesinProduct.push([arr1[i],arr2[j]]);

    }
}
return cartesinProduct;
}

console.log(cartesinProd(arr1,arr2))

// Time complexity : O (m * n);