const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Scrivi un numero: ", (input) => {
  let x = parseInt(input);
  let fattoriale = 1;
  for (let i = 1; i <= x; i++) {
    fattoriale *= i;
  }
  console.log(`Il fattoriale di ${x} è ${fattoriale}`);
  readline.close();
});