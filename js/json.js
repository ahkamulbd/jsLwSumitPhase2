let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
//console.log(obj);
//console.log(obj.employees[1].firstName);

// Converting object to JSON Format:

let person = {
    firstName: 'Sumit',
    lastName: 'Saha'
};
const personJSON = JSON.stringify(person);
console.log(personJSON);