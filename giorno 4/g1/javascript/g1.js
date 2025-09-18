const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeri = [];
let numeri2 = [];

readline.question("Numero elementi: ", (input) => {
  let x = parseInt(input);
  let i = 0;

  function inserisciNumero() {
    if (i < x) {
      readline.question(`Inserisci il numero ${i + 1}: `, (num) => {
        numeri.push(parseInt(num));
        i++;
        inserisciNumero();
      });
    } else {
      for (let j = 1; j <= numeri.length; j++) {
        numeri2.push(numeri[numeri.length - j]);
      }
      console.log("Array al contrario:", numeri2);
      readline.close();
    }
  }

  inserisciNumero();
});