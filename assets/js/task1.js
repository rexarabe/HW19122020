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


//task 2
//Создайте массив и отфильтруйте его, удалив все отрицательные и нулевые элементы
const massiv = [1,-2,3,-4,-5,0,10,7,-8,9,4,5,-10,0,0,];
const resultmassiv = massiv.filter(mass =>mass.valueOf() > 0);
console.log(resultmassiv);


//task 3
// Получить массив , элементы которого являются числами фибоначчи. Размер массива (количество элементов) задает пользователь.
function  Fibonacci(n){
    let n1= 1, n2 = 1, f, temp, c;

    for (c = n-2; c > 0, c--;){
        temp = n1;
        n1 = n1+n2;
        n2 = temp;
    }
    f = n1;

    return f;
}

let fibo = prompt(`Please write the number of element that you want to get in the fibonacci serie.`);

arrfibo = [0,1,1,2];
for (i=2; i <= fibo; i++){
    arrfibo.push(Fibonacci(i));
}
console.log(arrfibo)