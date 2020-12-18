'use strict'

let numbers = [1, 3, 5, 7,];

const triple = (number) => number *3;              // egyszerubb function deklaralas


let newNumbers = numbers.map(triple);

console.log(newNumbers);

console.log("--------------------------------------------------------------------------------------------------------------------------------");


let vadallatok = ["roka", "nyuszika", "farkas", "medve"];

function Disznoember(string){
    return string + 'Disznoember';

}

let ujAllatok = vadallatok.map(Disznoember);
console.log(ujAllatok);

console.log("--------------------------------------------------------------------------------------------------------------------------------");


let bankAccountAmount = 100000;
let personCashAmount = 0;

function giveMeMoney(widthdrawAmount= 0){

bankAccountAmount -= widthdrawAmount;
personCashAmount += widthdrawAmount; 
}

giveMeMoney(10000);

console.log(personCashAmount , bankAccountAmount);
console.log("--------------------------------------------------------------------------------------------------------------------------------");

function calcInterest (amount, interest, years){
    const interestAmount = amount *(1+ interest) **years-amount;
    return interestAmount;
}

let kamat = calcInterest(10000, 0.05, 5);

console.log(kamat);
console.log("--------------------------------------------------------------------------------------------------------------------------------");


( function printCurrentDay (day) {
    console.log ( day );
} ) ("Tuesday");
console.log("--------------------------------------------------------------------------------------------------------------------------------");

function randomNumber(){
    return Math.floor(Math.random() * 100);
}

function isEven(number){
    if (number % 2 == 0) {
        return "this is even";
    }
    return "this is odd";
}

let newArray = [];
let evens = 0;
let odds = 0;

for (let i=0 ; i<30 ; i++){
    let actualNumber = randomNumber();
    console.log ("attempt " + (i+1) + " : " + isEven(actualNumber));
    console.log("the number was: " + actualNumber);
    console.log();
    newArray.push(actualNumber);
    if (actualNumber % 2 ==0){
        evens ++
    }
    else {
        odds ++
    }

}
console.log ( "The numbers was: " + newArray);
console.log("EVEN numbers : " + evens + " ODD numbers : " + odds);

