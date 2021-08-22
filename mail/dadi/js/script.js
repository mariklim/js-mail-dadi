// 1. chiedo il giocatore di butare i dadi
// 2.genero il numero per giocatore
// 3.lo segno
// 4.genero il numero per computer
// 5.lo segno
// 6.stabilisco il numero piu grande e vincitore

alert("Vuoi giocare?")
var numeroGiocatore = Math.floor(Math.random() * 7);
alert(numeroGiocatore);

var numeroComputer = Math.floor(Math.random() * 7);
alert(numeroComputer);


if (numeroGiocatore > numeroComputer){
  alert("hai vinto")
}
else if (numeroGiocatore == numeroComputer){
  alert("siete pari")
}
else{
  alert("hai perso");
}




