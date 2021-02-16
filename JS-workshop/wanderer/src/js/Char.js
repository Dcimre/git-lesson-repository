'use strict';

class Character{

    level;
    healingPoints;
    attackPoints;
    defensePoints;
    actualPosition;
    isAlive;
    hasTheKey;


    setStartingPoint();

    move(){
        document.querySelector("hero-down").onkeypress = function(e){
            if(e.key=="w") y--;
            if(e.key=="s") y++;
            if(e.key=="a") x--;
            if(e.key=="d") x++;
    };
    attack();
    levelUp();
    die();

}


}