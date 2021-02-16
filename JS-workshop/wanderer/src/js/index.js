'use strict';

import game from './game.js';
 import map from './map.js;'






// Hozzájutni a rajz contexthez: 

game.setupCanvas();


// Ez a függvény azután fut le, hogy a képek betöltöttek

window.onload = game.newLevel();

  

/* Csak ki kell cserélned a paraméter string-et a document.getElementById('floor')-ban
 *
 * Lehetséges képek:
 * - floor
 * - wall
 * - hero-up
 * - hero-right
 * - hero-down
 * - hero-left
 * - boss
 * - skeleton
 */

// Függvény a gombnyomások kezelésére
function onKeyPress(event) {
  // Nyilak kezelése
  switch (event.keyCode) {
    case 37:
      alert('balra');
      break;
    case 38:
      alert('fel');
      break;
    case 39:
      alert('jobbra');
      break;
    case 40:
      alert('le');
      break;
  }
}

// Event listener hozzáadaása a gombnyomásokra
document.body.addEventListener('keydown', onKeyPress);