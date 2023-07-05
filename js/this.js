const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
//console.log(person.fullName());

const person1 = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const person2 = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(person1.fullName());
console.log(person1.fullName.call(person2));