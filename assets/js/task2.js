let massivk = [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18];

function f(x) {
    //let k2plus1 = [];
    let sum=0;
    for (i=0;i<x.length; i++){
        if (x[i]%2 !== 0){
            //k2plus1.push(x[i]);
            sum += x[i];
        }
    }
    return sum;
}

console.log(f(massivk));

//task2

let massiv2 = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(massiv2);
alert(`This is the element of the array ${massiv2}`);

function deleteelement(x){
    y = prompt("Enter the number of the index you wanted to be deleted");
    x.splice(y-1,1);
    return x;
}

deleteelement(massiv2);
console.log(massiv2);