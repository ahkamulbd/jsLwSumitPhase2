class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const car1 = new Car('Toyota', 2017);
const car2 = new Car('BMW', 2015);

// console.log(car1);
// console.log(`Car 1 name is ${car1.name} and is built at ${car1.year}`);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // play() {
    //     console.log(`${this.name} is playing cricket.`);
    // }
    play(playerType) {
        console.log(`${this.name} is playing cricket as ${playerType}.`);
    }
}
const person1 = new Person('Sakib', 35);
person1.play('All Rounder');