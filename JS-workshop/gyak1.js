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

console.log("--------------------------------------------------------------------------------------------------------------------------------");

let typo = "Csincsill"

function addString(string) {
return string + "a";
    
}

console.log (addString("kutyafasz"));

console.log("--------------------------------------------------------------------------------------------------------------------------------");

let basNum = 123;

function doubler(int){
    return int * 2;
}

let doubledNumber = doubler(basNum);

console.log(" A végeredmény: " + doubledNumber);
console.log("--------------------------------------------------------------------------------------------------------------------------------");



function factorial(int){
    let actualNumber = 1;
   let  newNumber = 0;
for (let i= 0 ; i<int ; i++ ){
  newNumber =  actualNumber * ( i +1 ) ;
  actualNumber = newNumber;

}
return BigInt(actualNumber);

}
let superNumber = factorial(24);
console.log(superNumber);


console.log("--------------------------------------------------------------------------------------------------------------------------------");

 let al = "GreenFox";

 function greet (name = "to You"){

 return "Greetings " + name + "!";
 }

 console.log(greet());

 console.log("--------------------------------------------------------------------------------------------------------------------------------");

 function printing(...param ){

    return param; 

 }


console.log (printing(12, 34, 33, 54, 32));
console.log (...printing(12, 34, 33, 54, 32));

console.log("--------------------------------------------------------------------------------------------------------------------------------");

function sumAll(number){
    let numberOne = 0;
   let  numberTwo = 0;
for (let i= 0 ; i<number ; i++ ){
  numberTwo =  numberOne + ( i +1 ) ;
  numberOne = numberTwo;

}
return numberOne;


}
let summed = sumAll(8)
console.log(summed);

console.log("--------------------------------------------------------------------------------------------------------------------------------");



// Anagramma
// Mi a fene az az anagramma?
// Az anagramma a szójátékok egy fajtája, melyben értelmes szavak vagy mondatok betűinek sorrendjét úgy változtatjuk meg,
 // hogy az eredmény szintén értelmes szó vagy mondat legyen. (több információért nézd meg az anagramma oldalt Wikipédián)

// Gyakorlat
// Készíts egy isAnagram nevű függvényt, kövesd az eddig használt nyelvi stílus útmutatót. 
// A függvények bemeneten fogadnia a kell két stringet és visszaadni egy logikai (boolean) értéket attól függően, 
// hogy a két string egymás anagrammája vagy sem.

// Példák
// bemenet 1	bemenet 2	kimenet
// "dog"	"god"	true
// "green"	"fox"	false

const isAnagram = (str1, str2) => {
    const normalize = str =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');

    return normalize(str1) === normalize(str2);
  };

  console.log("--------------------------------------------------------------------------------------------------------------");

  console.log (isAnagram( 'stup' , 'pust'));
  console.log (isAnagram( 'kaki' , 'kika'));

  let almaString = "alma"
  let str1 = "kedvenc gyümölcsöm az alma";
  let str2 = str1.split(" ");

  let pos = str2.indexOf(almaString);

  let wordToChange = str2[pos]


  console.log(wordToChange);



