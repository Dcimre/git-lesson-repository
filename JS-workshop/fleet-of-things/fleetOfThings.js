import { Thing } from './thing.js';
import { Fleet } from './fleet.js';

let fleet = new Fleet();

// -  Van egy `Thing` osztályod
// -  Van egy `Fleet` osztályod
// - Ezen osztályokat használva érd el az alábbi kimenetet:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

 const getMilk = new Thing("Get milk");
 const remove = new Thing("Remove the obstacle");
 const stand = new Thing("Stand up");
 const eat = new Thing("Eat lunch");

 const myThings = new Fleet;

 myThings.add(getMilk);
 myThings.add(remove);
 myThings.add(stand);
 myThings.add(eat)

 stand.complete();
 stand.toString();
 eat.complete();
 eat.toString();
 fleet.getThings();


console.log(myThings.toString());