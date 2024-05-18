'use strict'

// Première méthode : reverseArray
function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

// Deuxième méthode : reverseArrayInvert
function reverseArrayInvert(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}


console.log(reverseArray(["A", "B", "C"])); // renvoie ["C", "B", "A"]
console.log(reverseArrayInvert(["A", "B", "C"])); // renvoie ["C", "B", "A"]