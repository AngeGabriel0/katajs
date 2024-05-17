'use strict'
function isEven(n) {
    if (n === 0) {
        return true; //true = pair
    } else if (n === 1) {
        return false; //false = impair
    } else if (n < 0) {
        return isEven(-n);
    } else { 
        return isEven(n - 2);
    }
}

console.log(isEven(-1)); // Affiche false -> -1 est impair
console.log(isEven(50)); // Affiche true -> 50 est pair
console.log(isEven(75)); // Affiche false -> 75 est impair