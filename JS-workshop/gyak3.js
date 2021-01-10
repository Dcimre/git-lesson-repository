'use strict';

const person = {

    firstName: 'Sándor',
    lastName: 'Jokai',
    age : '32',
    loggedIn: false,

    login() {
        console.log( "you are logged in");
        this.loggedIn = true;

    },

};
console.log(person);

person.login();

console.log (person);

let personArray = Object.values(person);
let personKeyArray = Object.keys(person);
console.log(personArray);
console.log(personKeyArray);


let {firstName: name1 , lastName : name2} = person;

console.log (name1);
console.log (name2);
