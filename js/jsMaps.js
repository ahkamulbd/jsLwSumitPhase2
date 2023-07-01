const fruits = new Map();

fruits.set('apple', 500);
fruits.set('banana', 300);
fruits.set('oranges', 200);

fruits.delete('apple');

//console.log(fruits);

const newFruits = new Map([
    ['apple', 500],
    ['banana', 300],
    ['oranges', 200],
]);

let text = '';
for (const x of newFruits.entries()) {
    text += x;
    //console.log(x);
}
console.log(text);