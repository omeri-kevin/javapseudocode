// Trova il valore minimo e massimo in un array

const prompt = require('readline-sync');

// inizializza array "array"
let array = [];

// assegna a variabile x input utente per numero di elementi di cui l'array deve essere composto
let x = parseInt(prompt.question("Quanti elementi vuoi inserire nell'array? "));

// for itera per x volte input che riempie vettore con numero scelto da utente
for (let i = 0; i < x; i++) {
    let numero = parseInt(prompt.question("Inserisci un numero: "));
    array.push(numero);
}

// inizializza variabile max
// inizializza variabile min
let max = array[0];
let min = array[0];

// for che scorre array:
for (let i = 0; i < array.length; i++) {
    // se i è maggiore di max allora max=i
    if (array[i] > max) {
        max = array[i];
    }
    // se i è minore di min allora min=i
    if (array[i] < min) {
        min = array[i];
    }
}

// stampa max
console.log("Il valore massimo è:", max);
// stampa min
console.log("Il valore minimo è:", min);