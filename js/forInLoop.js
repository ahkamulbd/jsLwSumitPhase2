const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    isStudent: true
}

for (let x in person) {
    //console.log(x);
    //console.log(person[x]);
    //console.log(x, person[x]);
}

const numbers = [45, 4, 9, 16, 25];

for (let number in numbers) {
    //console.log(number);
    //console.log(numbers[number]);
    console.log(number, numbers[number]);
}