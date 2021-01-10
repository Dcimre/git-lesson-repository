'use strict';



function censor( text, original, newWord){

    let splittedText = text.split(" ");

    splittedText = splittedText.map(actualWord => {
        if (actualWord === original){

            return newWord;
        }
        return actualWord;
    })

    return splittedText.join(" ");
  
   /* let str2 = text.split(" ");

    let pos = str2.indexOf(original);
  
    let wordToChange = str2[pos]
 

    delete str2[pos];
    str2.push(newWord);
   let newString = str2.join(" "); */

}

const censoredString = censor("kedvenc gyümölcsöm a(z) alma", "alma", "banán");

console.log(censoredString)


console.log("..................................................................................................................................");


let testArray = [10, 2,22,24,71,12,32,91,30];



function threeSum (arr){

  let  newArray = arr.sort ( (a, b) => a-b);

    if (arr.length < 3){

        return -1;
    }


    return newArray [0] + newArray [1] + newArray [2];

}


console.log ("a 3 legkissebb elem összege: " + threeSum(testArray));

console.log("..................................................................................................................................");


let text = "Ez a string nyelvtanilag helyes. örülj neki."

function grammarCheck(text){

    let isPerfect = true;

    let textWithoutSpaces =  text.split(' ').join('');

    let sentences = textWithoutSpaces.split('.');

   sentences.shift();

   for (let i = 0; i<sentences.length; i++) {

    if (sentences[i] !== '' && sentences[i][0] === sentences[i][0].toLowerCase()){

        isPerfect = false;
    }

   }

   return isPerfect;



} 
console.log(grammarCheck(text));


console.log("..................................................................................................................................");


let numberArray = [2,4,5,7,11,43,23,22,1,12];
let numb = 2;

function main (array, number){

    let average = 0;
let sum = 0;
let count = 0;

    for (let i = number-1; i< array.length; i+=number){
     
        sum += array[i];
        count++;

        console.log(array[i]);
    }


    console.log ("elemek száma:" + count);
    console.log(sum);

    if (count  > 0 ){

        average = sum / count;

    }

    return (average);
    
    
}

console.log (main(numberArray, numb));
