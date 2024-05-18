'use strict'

function josephusProblem(totalPrisoners, eliminationStep) {
  let prisoners = [];
  for (let prisonerID = 1; prisonerID <= totalPrisoners; prisonerID++) {
    prisoners.push(prisonerID);
  }

  let currentEliminationPoint = 0;

  while (prisoners.length > 1) {
    // Calcul : (index actuel + step d'élimination - 1) % nombre de prisonniers
    let eliminationIndex = (currentEliminationPoint + eliminationStep - 1) % prisoners.length;
    prisoners.splice(eliminationIndex, 1);

    // Mettre à jour le point d'élimination pour le prochain tour
    currentEliminationPoint = eliminationIndex;
  }
  return prisoners[0];
}

// Exemple d'utilisation : 41 prisonniers, élimination à chaque tour (step = 3
console.log(josephusProblem(41, 3)); // renvoie 31 

