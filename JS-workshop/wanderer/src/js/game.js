'use strict';

 let game = {

    

    tileSize : 72,
    numTiles : 10,
    uiWidth : 4,

    somefunction(){

    },

    setupCanvas(){
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

    
    },

    newLevel(){
    

  let coordinX = 0;
  let coordinY = 0;

for   (let i=0; i<10; i++){

  for (let j=0; j<10; j++){
    ctx.drawImage(this.floor, coordinX, coordinY);
    coordinX +=72;
      };

      coordinY +=72;
      coordinX = 0;
    };

    
    ctx.drawImage(this.hero, 0, 0);
}

}

export default game;




