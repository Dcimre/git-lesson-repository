// Third
'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal:
// `[1, 3, 5, 7]`
// Logold ki a `numbers` harmadik elemét a konzolra!

let numbers = [1, 3, 5, 7,];
console.log(numbers[2]);



console.log("----------------------------------------------------------------------------------------------------------------------      ")
//Compare Length
'use strict';
// Hozz létre egy `firstArrayOfNumbers` változót az alábbi tartalommal:
// `[1, 2, 3]`
// Hozz létre egy `secondArrayOfNumbers` változót az alábbi tartalommal:
// `[4, 5]`
// Logold ki a konzolra, hogy 'secondArrayOfNumbers hosszabb, mint a
// firstArrayOfNumbers' hogyha a 'secondArrayOfNumbers'-ben több elem van, mint
// a 'firstArrayOfNumbers'-ben

let firstArrayOfNumbers = [1, 2, 3];
let secondArrayOfNumbers = [4, 5];

if (secondArrayOfNumbers.length > firstArrayOfNumbers) {
    console.log("second array hosszabb");
}
else {
    console.log("first array hosszabb");

}

console.log("----------------------------------------------------------------------------------------------------------------------      ")


//Sum elements
'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal:
// `[54, 23, 66, 12]`
// Logold ki a második és harmadik elem összegét a konzolra!


let nums = [54, 23, 66, 12];

console.log (nums[1] + nums[2]);




console.log("----------------------------------------------------------------------------------------------------------------------      ")

//Swap elements
'use strict';
// Hozz létre egy `names` változót az alábbi tartalommal:
// `["Arthur", "Boe", "Chloe"]`
// Cseréld fel a names első és harmadik elemét!
// Logold ki az eredményt a konzolra!


let names = ["Arthur", "Boe", "Chloe"];

var swapArrayElements = function(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

swapArrayElements(names, 0, 2)
console.log(names);

console.log("----------------------------------------------------------------------------------------------------------------------      ")

//Print elements
'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[4, 5, 6, 7]`
// Logold ki a konzolra a numbers tömb mindegyik elemét
// *hint: használj ciklust, a console.log(numbers) nem jó megoldás!
// Bónuszpont, hogyha ezt megcsinálod a megfelelő beépített függvénnyel is

let numbs = [4, 5, 6, 7];

for (let i=0 ; i< numbs.length; i++){
    console.log (numbs[i]);
}

console.log("----------------------------------------------------------------------------------------------------------------------      ")


//Change element
'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[1, 2, 3, 8, 5, 6]`
// Változtasd meg a 8-as számot 4-essé a map metódussal
// Logold ki a 4. elemet

let example = [1, 2, 3, 8, 5, 6];
console.log(example);


let index = example.indexOf(8);
if (index!==-1){
    example[index] = 4;
}
console.log(example[3]);

console.log("----------------------------------------------------------------------------------------------------------------------      ")


//Increment element
'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal:
// `[1, 2, 3, 4, 5]`
// Növeld meg a harmadik elem értékét!
// Logold ki a harmadik elemet a konzolra!


let exercise = [1, 2, 3, 4, 5]
console.log(exercise);

exercise[2] +=2;
console.log(exercise[2]);
console.log("----------------------------------------------------------------------------------------------------------------------      ")


//Append a
'use strict';
// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy "a" betűt
// Próbálj meg beépített metódust használni ciklus helyett!

let Ani = ['koal', 'pand', 'zebr']
console.log(animals);

function plusA(animal){
    return animal + "a";
}

let realAnimals = animals.map(plusA);
console.log(realAnimals);
console.log("----------------------------------------------------------------------------------------------------------------------      ")



//Double items
'use strict';
// Hozz létre egy `drinks` változót az alábbi tartalommal:
// `['Gin', 'Whiskey', 'Wine', 'Beer']`
// Duplázd meg a stringeket (szöveges elemeket)!
// Használj beépített metódust a ciklusok helyett!
// Logold ki az eredményt!
// A várt eredmény: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`


let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer']

function double(drink){
    return drink+drink;
}
let drinksDouble = drinks.map(double);
console.log(drinksDouble);
console.log("----------------------------------------------------------------------------------------------------------------------      ")


//Colors
'use strict';
// Hozz létre egy kétdimenziós tömböt, ami különböző színek egyes árnyalatait
// tartalmazza.
// A `colors[0]` a zöld árnyalatait tartalmazza:
// `"lime", "forest green", "olive", "pale green", "spring green"`
// A `colors[1]` a piros árnyalatait tartalmazza:
//   `"orange red", "red", "tomato"`
// A `colors[2]` a rózsaszín árnyalatait tartalmazza:
//   `"orchid", "violet", "pink", "hot pink"`

//Sum all elements
'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Logold ki az elemek összegét a konzolra!

let newNumbers = [3, 4, 5, 6, 7]


console.log (newNumbers.reduce((a, b) => a + b, 0));

console.log("----------------------------------------------------------------------------------------------------------------------      ")



//Matrix
'use strict';
// Hozz létre dinamikusan* egy kétdimenziós tömböt!
// Tartalma az alábbi mátrix** legyen.
// Használj ciklust hozzá!

//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0

let x = 4;
let y = 4;


let arr = new Array(x);


for (let i=0 ; i < x ; i++){

    
 arr [i]= new Array(y);
 arr[i].push(0);


}

console.log(arr);




// Logold ki a mátrixot a konzolra.
//
// * a mérete egy változóból érkezzen, így téve dinamikussá a mátrix létrehozását
// ** ne ijedj meg a kifejezéstől, egy mátrix: tömbök a tömbben

//Reverse list
'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Fordítsd meg a bejárás sorrendjét, kezdd a végéről!
// - beéptett metódussal
// - egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét