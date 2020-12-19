//This is just doing the same exercices
const wordsinfrench = [
    'mère',
    'père',
    'frère',
    'forêt',
    'ordinateur'
];

const result = wordsinfrench.filter( (wordsinfrench) => wordsinfrench.length > 4);
console.log(result);

//2 var

//task 1
//Даны два массива. Объедините их и преобразовав в строку.
const a= [2,5,3,4,6];
const b = [ 5,6,7,9];
const c = a.concat(b);

console.log(c);
