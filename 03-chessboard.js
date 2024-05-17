'use strict'
let boardSize = 8;
let chessboard = "";

for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    //si la somme des coordonnées est paire, on affiche un espace
    if ((i + j) % 2 === 0) {
      chessboard += " ";
      //sinon, on affiche un #
    } else {
      chessboard += "#";
    }
  }
  //saut de ligne
  chessboard += "\n";
}

console.log(chessboard);   
