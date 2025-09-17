const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Scrivi gradi in celsius: ', (bInput) => {
  const B = parseInt(bInput, 10);
  const farenheit = (B * 9 / 5) + 32;
  console.log(farenheit);
  readline.close();
});