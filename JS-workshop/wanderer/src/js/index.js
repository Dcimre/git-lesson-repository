'use strict';

const canvas     = document.getElementById('canvas');
const ctx        = canvas.getContext('2d');
const floor      = document.getElementById('floor');
const wall       = document.getElementById('wall');
const hero_down  = document.getElementById('hero-down');
const hero_up    = document.getElementById('hero-up');
const hero_left  = document.getElementById('hero-left');
const hero_right = document.getElementById('hero-right');
const skeleton   = document.getElementById('skeleton');
const boss       = document.getElementById('boss');

let map = {

  cols: 10,
  rows: 10,
  tsize: 72,
  tiles: [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,0,0,0,0,1],
    [1,0,0,0,1,1,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,1],
    [0,0,0,1,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1],
  ],

  getTile: function(col, row) {
    return this.tiles[row] [col];
  },

  generateMap: function(){

    for (var c = 0; c < map.cols; c++) {

      for (var r = 0; r < map.rows; r++) {

        var tile = map.getTile(c, r);
        
        if (tile == 0) { 
          ctx.drawImage(

            wall,
            c * map.tsize, // target x
            r * map.tsize // target y
          );
        }
        else{
          ctx.drawImage(

            floor,
            c * map.tsize,  // target x
            r * map.tsize // target y
          );

        }
      }
    }
    return;
  },

  setPlayer: function(){
    
    ctx.drawImage(hero_down, 0, 0);
  },
};

let utility = {

  d6(){
    Math.floor(Math.random()*6 +1);

  }
    
  
}

class Character {

  currentX;
  currentY;
  

  lvl;

  hp;
  dp;
  ap;

  isAlive = true;

  constructor(hp,dp,ap,lvl,){

    this.hp  = hp;
    this.dp  = dp;
    this.ap  = ap;
    this.lvl = lvl;
  };
  
  moveLeft(char){
    
    if (map.tiles [(this.currentX-72)  / 72] [this.currentY / 72] == 1){
    ctx.drawImage(char , this.currentX - 72 , this.currentY);
    this.currentX -=72;
    ctx.drawImage(floor,this.currentX +72,this.currentY );
    }
    else {
      ctx.drawImage(char, this.currentX,this.currentY);
    }

  };
  moveRight(char){
    ctx.drawImage(char , this.currentX + 72 , this.currentY);
    this.currentX+=72;
    ctx.drawImage(floor,this.currentX -72,this.currentY );

  };
  moveUp(char){
    ctx.drawImage(char , this.currentX , this.currentY - 72);
    this.currentY-=72;
    ctx.drawImage(floor,this.currentX, this.currentY +72 );

  };
  moveDown(char){
    ctx.drawImage(char , this.currentX , this.currentY + 72);
    this.currentY+=72;
    ctx.drawImage(floor , this.currentX , this.currentY - 72);

  };
  attack(){

  };
  lvlUp(){

  };

  die(){

  };


}

/* function newHero(){
  const Hero = new Character(
    20 + (3*utility.d6()), // HP
    2  * (utility.d6()),  //  AP
    5  + (utility.d6()), //   DP
    1,
  )
  Hero.currentX = 0;
  Hero.currentY = 0;
}
*/


// ONLOAD: 

window.onload = () => {
  map.generateMap();
  map.setPlayer();
};
const Hero = new Character(
  20 + (3*utility.d6()), // HP
  2  * (utility.d6()),  //  AP
  5  + (utility.d6()), //   DP
  1,
)
Hero.currentX = 0;
Hero.currentY = 0;







//character moving

function onKeyPress(event) {

  switch (event.keyCode) {
    case 37:
      Hero.moveLeft(hero_left);
      break;
    case 38:
      Hero.moveUp(hero_up);
      break;
    case 39:
      Hero.moveRight(hero_right);
      break;
    case 40:
      Hero.moveDown(hero_down);
      break;
  }
}

// Event listener hozzáadaása a gombnyomásokra
document.body.addEventListener('keydown', onKeyPress);