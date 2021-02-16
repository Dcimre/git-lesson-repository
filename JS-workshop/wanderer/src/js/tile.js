'use strict';

class Tile{
    constructor(x,y,image,passable){
        this.x =x;
        this.y =y;
        this.image =image;
        this.passable =passable;

    }

    draw(){
        drawImage(this.image, this.x, this.y);
    }
}

class Floor extends Tile{
    constructor(x,y){
        super(x,y,2,true);
    };
}

class Wall extends Tile{
    constructor(x,y){
        super(x,y,3,false);
    };
}