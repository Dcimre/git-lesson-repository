"use strict";


class Animal {

   name;
   type;
   #thirst;
   #hunger;

    constructor(animalname, animaltype){
        this.name = animalname;
        this.type = animaltype;
        this.#thirst = 50;
        this.#hunger = 50;
    }

    
    eat(number){
        this.#hunger -= number;
        console.log (`${this.name} was eaten ${number} food. hunger now: ${this.#hunger}`);
    }

    drink(number){
        this.#thirst -= number;
        console.log (`${this.name} was drank ${number} water. thirst now: ${this.#thirst}`);
    }

    play(number){
        this.#hunger +=number;
        this.#thirst += number;
        console.log(`${this.name} was playing and getting more thirsty and hungry`)
        console.log(`hunger : ${this.#hunger}, thirst ${this.#thirst}`);
    }



}

export default Animal;










