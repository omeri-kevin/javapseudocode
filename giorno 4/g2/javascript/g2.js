const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Scrivi l'anno: ", (input) => {
  const anno = parseInt(input);
  if ((anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0)) {
    console.log(`${anno} è BISISTILE`);
  }
  readline.close();
});