const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('SCRIVI LA BASE DEL RETTANGOLO: ', (aInput) => {
  const A = parseInt(aInput, 10);
  readline.question('SCRIVI L\'ALTEZZA DEL RETTANGOLO: ', (bInput) => {
    const B = parseInt(bInput, 10);
    const areaRettangolo = A * B;
    console.log('Area rettangolo:', areaRettangolo);
    readline.close();
  });
});