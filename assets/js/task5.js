limit = 10;
str ='';
for(i=0; i<limit; i++){
        str += '*';
        console.log(str);
        limit--;
    }


// Проверьте правильность сложения чисел пользователем. Выведите правильный ответ.
let a, b;
a = prompt("Enter the first number");
b = prompt("Enter the second number");

let a1 = parseInt(a);
let b2 = parseInt(b);
let answer = a1 * b2;
response1 = prompt(`What is the answer of ${a1} x ${b2} = ?`);
response = parseInt(response1);
switch (response) {
    case answer:
        console.log("Good job, you got the right answer");
        alert("Good job, you got the right answer");
        break;
    default:
        console.log("Your answer is wrong");
        alert("Your answer is wrong");
        break;
}

