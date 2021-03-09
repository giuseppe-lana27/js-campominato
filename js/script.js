/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

// 1. dichiaro l'array che conterrà i numeri del computer
var numeriComputer = [];
// 2. generazione numeri per il computer casuali da inserire nell'array
while (numeriComputer.length < 16){
  var numero = generaNumeroRandom(0, 100);
  // uso la funzione per non ripetere i numeri
  var cerca = inArray(numeriComputer, numero);
  if ( cerca == false){
    numeriComputer.push(numero);
  }
}
console.log(numeriComputer);
 // funzioni per genereare numeri random e ricerca ripetizioni
function generaNumeroRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function inArray(array, element) {
  var i = 0;
  var trovato = false;
  while (i < array.length && trovato == false) {
    if (array[i] == element) {
      trovato = true;
    }
    i++;
  }
  return trovato;
}
// 3. chiedo all'utente di inserire dei numeri tra 1 e 100
var numeriUtente = [];
var numeroUtente;
var possibilita = 84;
var presente = false;

while ( numeriUtente.length < possibilita && presente == false){
  numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));
  numeriUtente.push(numeroUtente);
  // controllo se i numeri inseriti non sono presenti nei numeri del computer
  if (inArray(numeriComputer, numeroUtente) == true){
    presente = true;
    alert("Hai inserito il numero bomba, hai perso!");
  } else if (isNaN(numeroUtente)){
    numeroUtente = parseInt(prompt("Inserisci un valore numerico tra 1 e 100"));
  } else if (numeroUtente < 1 || numeroUtente > 100){
    numeroUtente = parseInt(prompt("Inserisci un altro numero tra 1 e 100"));
    numeriUtente.push(numeroUtente);
  } else if (numeriUtente.includes(numeroUtente)){
    numeroUtente = parseInt(prompt("Inserisci un numero diverso dal precedente, sempre tra 1 e 100"));
  }
}
console.log(numeriUtente);
