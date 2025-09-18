const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostraMenu() {
  console.log("SCEGLI UN'OPZIONE tra 1, 2, 3");
  console.log("0 PER uscire");
  readline.question("Inserisci la tua scelta: ", (scelta) => {
    switch (scelta) {
      case "1":
        console.log("OPZIONE1");
        mostraMenu();
        break;
      case "2":
        console.log("OPZIONE2");
        mostraMenu();
        break;
      case "3":
        console.log("OPZIONE3");
        mostraMenu();
        break;
      case "0":
        console.log("uscita in corso");
        readline.close();
        break;
      default:
        console.log("scelta non valida");
        mostraMenu();
        break;
    }
  });
}

mostraMenu();