'use strict';

console.log('VALAMI');

import Lion from './Lion.js';
import {OtherLion} from './Lion.js';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

class Person {
name = "John Doe";

}

console.log(new Person());
console.log(new Person("Sanyika"));


class Animal{

   // constructor() {}  = default constructor

   legnumber = 0;

   constructor(legs) {           //This = példány //

       this.legnumber = legs;
       this.type = 'Animal with odd number of legs';
   }

   walk(){
       console.log(`I'm walking on my ${this.legnumber} legs.`);
   }

}

const animalWith3Legs = new Animal(3);
const animalWith5Legs =  new Animal(5);

console.log(animalWith3Legs);
console.log(animalWith5Legs);

animalWith3Legs.walk();
animalWith5Legs.walk();

console.log( "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


class Dog {
    legs;
    name;
    color;
    numberOfTails;
    friends = [];

    constructor (legs, name, color, numberOfTails){
        this.legs = legs;
        this.name = name;
        this.color = color;
    }

        bark () {
            console.log(`Vau-Vau! ${this.name}`)
        }
        makeFriendship (cat) {
            this.friends.push(cat);

        }

}

class Cat {

    name;
    breed;
    #food;
    #distance = 0;
    #lives = 9;

    constructor (name, breed, ){
        this.name = name;
        this.breed = breed;
        this.#food = 10;

        }

        meow(){
            this.#food --;
            console.log(`Meow-Meow! ${this.name}`);
            return this;
        }

        hasEnoughFood(){
            return this.#food > 0;
        }
        walk(){
            this.#distance ++;
            this.#food--;
            return this;
        }

        addLife(){
            this.#lives++;
            return this;
        }

        getLifes(){
            return this.#lives;
        }



}


const dogs = [
    new Dog(2, "Fluffy" , "Barna" , 1),
    new Dog(4, "GoodDog" , "Fekete" , 1),
    new Dog(6, "Buksi" , "Fehér" , 2),
    new Dog(4, "FreeBeer" , "Tarka" , 3),
];

const cats = [
    new Cat ('Cirmi' , 'Perzsa'),
    new Cat ('Manci' , 'Sziámi'),
    new Cat ('Lukrécia' , 'tarka'),
    new Cat ('Oriza Triznyák' , 'házi'),
];

dogs.forEach((dog, i) => dog.makeFriendship(cats[i] ) );

// dogs.forEach(dog => dog.bark());
// cats.forEach(cat => cat.meow());

/* while (cats[0].hasEnoughFood()){
    cats[0].meow();
} */

const Buksi = dogs[2];

  console.log (Buksi.friends[0].name);

 Buksi.friends.forEach( cat => cat.meow());

 cats[1].addLife();

console.log("Manci is alive?" , cats[1].getLifes());

cats[3].walk().meow();


console.log ( new Lion() ) ;
console.log ( new OtherLion() );


