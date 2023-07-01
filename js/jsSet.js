const mySet = new Set();

mySet.add('a');
mySet.add('b');
mySet.add('c');

//console.log(mySet);

const letters = new Set(['a', 'b', 'c']);

let text = '';
letters.forEach(function (value) {
    text += value;
});
//console.log(text);

for (let letter of text) {
    //console.log(letter);
}

const letterValue = letters.values();
console.log(letterValue);

for (let member of letterValue) {
    console.log(member);
}