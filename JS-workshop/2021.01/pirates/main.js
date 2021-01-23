import Pirate from './Pirate.js';
import Ship from './Ship.js'

/* let esteban = new Pirate("Esteban",32,"Sailor");
let carlos = new Pirate("Carlos",30,"Sailor");
let sebastian = new Pirate("Sebastian",24,"Sailor");
let julio = new Pirate("Julio",43,"Sailor");
let jackSparrow = new Pirate("Jack Sparrow",32,"Captain");

console.log(esteban);
esteban.drinkSomeRum(3);

console.log(esteban.drunkness);


esteban.howIsGoingMate();

console.log("----------------------------------------------------")


esteban.drinkSomeRum(2);

 esteban.howIsGoingMate();



console.log("----------------------------------------------------")

esteban.drinkSomeRum(3);

esteban.brawl(julio); */

console.log("----------------------------------------------------")

let ship = new Ship("Ship");
ship.fillShip();
console.log(ship);
console.log(ship.crewCounter);
ship.crew[0].drinkSomeRum(3);

ship.rumCounter();
console.log(ship.captainsRumAmount);
console.log(ship.crew[0]);
ship.sailorisAlive();
console.log(ship.crewAlive);

console.log("----------------------------------------------------")

console.log(ship);



