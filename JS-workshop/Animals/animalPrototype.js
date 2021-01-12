"use strict";

// Készíts egy Animal osztályt

// Minden állatnak van egy hunger (éhség) értéke, ami egy egész szám
// Minden állatnak van egy thirst (szomjúság) értéke, ami egy egész szám
// Amikor létrehozol egy új állat példányt, ezeknek az értékei alapból legyenek 50
// Minden állat tud enni (eat()), ami csökkenti az éhségét eggyel
// Minden állat tud inni (drink()), ami csökkenti a szomjúságát eggyel
// Minden állat tud játszani (play()), ami mindkét értéket növeli eggyel


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










