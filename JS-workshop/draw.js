'use strict';

const canvasElement = document.querySelector('#canvas');
const ctx = canvasElement.getContext('2d');

canvasElement.width = 760;
canvasElement.hight = 880;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function drawLine( from, to){
    ctx.beginPath();
    ctx.moveTo (from.x, from.y);
    ctx.lineTo( to.x, to.y);
    ctx.stroke();
}

function drawText (where, what){
    ctx.font = '20px serif';
    ctx.fillText (what,where.x,where.y);
}
const length = 40;
 for(let i = 0; i < 19; i++) {
   ctx.lineWidth = 5;
     drawLine( { x: i * length, y: 0 }, { x: ( i + 1 ) * length, y: 0 } );
     ctx.lineWidth = 1;
     drawLine( { x: ( i + 1 ) * length, y: 0 }, { x: ( i + 1 ) * length, y: 10 } );
     drawText( { x: ( i + 1 ) * length - 5, y: 30 }, ( i + 1 ) * length );
 }
 for(let i = 0; i < 22; i++) {
     ctx.lineWidth = 5;
     drawLine( { y: i * length, x: 0 }, { y: ( i + 1 ) * length, x: 0 } );
     ctx.lineWidth = 1;
     drawLine( { y: ( i + 1 ) * length, x: 0 }, { y: ( i + 1 ) * length, x: 10 } );
     drawText( { y: ( i + 1 ) * length + 5, x: 15 }, ( i + 1 ) * length );
 }