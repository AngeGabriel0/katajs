'use strict'
const countBs = (string, char) => { //Cette fonction renvoie la fonction countChar
  return countChar(string, char); 
}

const countChar = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("Barbarisme", "b")); // Devrait afficher 1