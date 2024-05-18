'use strict'

// La fonction range prend un tableau de nombre,  
function range(start, end, step = 1) {
    let array = [];

    // Si le step est positif
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        // Si le step est négatif ou 0
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

// La fonction sum prend un tableau de nombres et renvoie la somme de ces nombres.
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(range(1, 10, 2)); // renvoie [1, 3, 5, 7, 9]
console.log(range(5, 2, -1)); // renvoie [5, 4, 3, 2]
console.log(sum(range(1, 10))); // renvoie 55