const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let a = 0, b = 0, c = 0;

readline.question('Metti 1 numero: ', (aInput) => {
  a = parseInt(aInput, 10);
  readline.question('Metti 1 numero: ', (bInput) => {
    b = parseInt(bInput, 10);
    readline.question('Metti 1 numero: ', (cInput) => {
      c = parseInt(cInput, 10);

      if (a > b && a > c) {
        console.log(a + ' è il numero più grande');
      }
      if (b > c && b > a) {
        console.log(b + ' è il numero più grande');
      }
      if (c > b && c > a) {
        console.log(c + ' è il numero più grande');
      }

      readline.close();
    });
  });
});