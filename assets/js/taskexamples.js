const users= [
    {
        name: 'user1',
        age: 20,
    },
    {
        name: 'user2',
        age: 17,
    },
    {
        name: 'user3',
        age: 21,
    },
    {
        name: 'user4',
        age: 14,
    }
];

users.forEach(function(elem){
    elem.isSelected = false;
});

const AdultUsers = users.filter(elem => elem.age> 18);
console.log(AdultUsers);

const isEveryUserAdult = users.every(checkAdult);

function checkadult(user){
    return user.age > 18;
}