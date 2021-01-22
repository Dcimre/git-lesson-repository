class Person {

    name;
    height;
    weight;

    constructor(name, height, weight){

        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    walk(meter){

        for(let i=0 ; i < meter; i++){

            console.log (`I'm ${this.name}, and im walking!`);
        };
    }
}

class Man extends Person{                                // az extends-el leszármaztatom a 'Man' osztályt a 'Person' Classból

    beardLength;

    constructor(name, height, weight,beardLength){
        
        super(name,height,weight);                      // superrel meghívom a BaseClass alap tulajdonságait, majd utána kiegészítem

        this.beardLength = beardLength;
    }

    walk(meter){
        super.walk(meter)
        console.log("i have long steps")
    }

    pissingOnFeet(){
        console.log("I can piss on my feet, im so lucky!")
    }
}

let sanyika = new Man('Sanyika', '170cm', '75kg', '12cm');
let  emberke = new Person('Emberke', '160', '100kg');

emberke.walk(3);

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

console.log(sanyika);
sanyika.walk(3);
sanyika.pissingOnFeet()

