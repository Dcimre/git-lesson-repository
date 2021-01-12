'use strict'

import Animal from './animalPrototype.js';

// make 2 animal, a dog and a cat


    const myDog = new Animal ("Fluffy", "Dog");

    const myCat = new Animal ("Cirmos", "Macska");

// let me see them

    console.log (myDog)
    console.log (myCat);

console.log("----------------------------------------------------------------------------------------------------------------")

// let them eat

    myDog.eat(20);
    myCat.eat(17);

console.log("----------------------------------------------------------------------------------------------------------------")

//let them drink

    myDog.drink(15);
    myCat.drink(11);

console.log("----------------------------------------------------------------------------------------------------------------")

// let them play

    myDog.play(5);
    myCat.play(3);




