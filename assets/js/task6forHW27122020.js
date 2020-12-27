//IndexOf. Найти индекс первого нулевого элемента.
let massiv = [1,2,3,5,6,7,8,9];
let index = massiv.indexOf(1);
console.log(`The first zero index of array Massiv is ${index}`);

//concat. слить три массива в один
const array1 = [1,2,3,5,6];
const array2  = [7,8,9,10];
const array3 = [11,12,13,14,15];
const superarray = array1.concat(array2.concat(array3));

console.log(array1);
console.log(array2);
console.log(array3);
console.log(`By concatenating the three arrays we get`)
console.log(superarray);

//every. проверить содержит ли массив одни нули

function isOnlyZeroes(a){
    function CheckZeroes(element, index, array){
        return element =0;
    }
    return a.every(CheckZeroes);
}
exampleArray = [0,0,0,0,0,0];
console.log(isOnlyZeroes(exampleArray));


//fill. создать массив из 10 звездочек
console.log(Array(10).fill('*'));