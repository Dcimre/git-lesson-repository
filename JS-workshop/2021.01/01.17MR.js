'use strict';

// REKURZIO //

function power(base, exponent){
    if(exponent === 0){
        return 1;
    }
    return base * power(base, exponent -1);
}

console.log (power(3,5));

function factorial(number){

    if (number ===1){
        return 1;
    }
    return number * factorial(number-1);

}

console.log(factorial(10));

//  1, 1, 2, 3, 5, 8, 13, 21, 

// const cache = {};


function fibonacci(n , cache = {} ){
    if (n===1){
        return 0;
    }
    if (n===2){
        return 1;
    }
    if(cache[n]!== undefined){
        return cache[n];
    }

    
    cache[n] = fibonacci(n-1,cache) + fibonacci(n-2, cache);

    return cache[n] + fibonacci (n-2, cache);

    
}

console.log(".---.-.-.-...--.-..---.---.---.---.---.-..-..----.----.--.-..-----...-.-.---.-----------");

const startTime = new Date();


console.log( fibonacci(49) );

const endTime = new Date();

console.log ("time: " , (endTime - startTime) / 1000 );

// FAMILY TREE



class Person{

    name;
    dad;
    mom;

    constructor(name, dad = null, mom = null){
            this.name = name;
            this.dad = dad;
            this.mom = mom;

    }
}

const gazsika = new Person(
    'Gazsika',
    new Person (
        'Nagy Gazsi',
        new Person('Bélabácsi'),
        new Person(
            'Bözsinéni',
        new Person( 'Ödönbácsi')
        ),
    ),
    new Person(
        'Gazsinéni',
        new Person('Gazsinéni apuka'),
        new Person ('Gazsinéni anyuka'),
    )
)

function getFamilyTree(person, indent = 0){

    if (person === null){
        return;
    }
    console.log(`${'     ' .repeat(indent)}${person.name} 's parents:`);
    getFamilyTree(person.dad, indent +1);
    getFamilyTree(person.mom, indent +1);

}

getFamilyTree(gazsika);


// KLÓNOZÁS


const nestedObj = {
    a:1,
    b:2,
    f:[
        {
            g:5,
            h:6

        }
    ]

}
    const obj = {
        d:3,
        e:4,
        c:nestedObj

    }


 // Object.keys(obj).forEach

function clone(obj, newObj = {}){

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            if(Array.isArray ( obj[key] )){
                newObj[key] = [];
                obj[key]. forEach ( (elem, ix) => {
                    newObj [key][ix] = {};
                    clone ( elem, newObj[key][ix] );
                } );

            }
            else{
                newObj[key] = {};
                clone(obj[key], newObj[key]);

            }
        }

        else {
            newObj[key] = obj[key];
        }
    })


}

const newObj = {};
clone (obj, newObj);
console.log(newObj);

console.log(obj.c === newObj.c);
console.log(obj.c.f[0] === newObj.c.f[0]);





