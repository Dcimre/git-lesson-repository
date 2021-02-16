'use strict';



class Background{

    



    newLevel(){
        const floor = document.getElementById('floor');

  let coordinX = 0;
  let coordinY = 0;

for   (let i=0; i<10; i++){

  for (let j=0; j<10; j++){
    ctx.drawImage(floor, coordinX, coordinY);
    coordinX +=72;
      };

      coordinY +=72;
      coordinX = 0;
    };

    const Hero = document.getElementById('hero-down');
    ctx.drawImage(Hero, 0, 0);
  
};
    }
    export default Background;