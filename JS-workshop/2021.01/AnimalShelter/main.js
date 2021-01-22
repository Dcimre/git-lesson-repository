'use strict';

import Animal from './Animal.js';
import Cat from    './Cat.js';
import Dog from    './Dog.js';
import Parrot from './Parrot.js';
import Shelter from './Shelter.js';

const buksi = new Dog('Buksi', 'Thor');

const sziaMiau = new Cat('SziaMiau', 'Hókuszpók');

const gyurika = new Parrot ('Gyurika', 'Jack Sparrow');


//  console.log(String(buksi));  -- mivel van toString method, innentől így alakíthatom stringgé


// console.log (gyurika);

// console.log('.............................................................................................................................')


// buksi.heal();

// buksi.print (buksi.toString());

// console.log('.............................................................................................................................')

// sziaMiau.heal();

//sziaMiau.print (sziaMiau.toString());

 console.log('.............................................................................................................................')

const noe = new Shelter;

noe.rescue(buksi);
noe.rescue(gyurika);
noe.rescue(sziaMiau);

gyurika.setToSick();
noe.heal();
console.log(gyurika);







