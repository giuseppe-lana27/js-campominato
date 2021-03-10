/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Bonus: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

// 0. Bonus
do{
  var sceltaDifficolta = parseInt(prompt("Inserisci il numero per il livello di difficoltà del gioco: 0: Facile, 1: Medio, 2: Difficile"));
} while (sceltaDifficolta != 0 && sceltaDifficolta != 1 && sceltaDifficolta != 2);

var nMaxBombe;
switch (sceltaDifficolta) {
  case 0:
    nMaxBombe = 100;
    break;
  case 1:
    nMaxBombe = 80;
    break;
  case 2:
    nMaxBombe = 50;
    break;
}
// 1. dichiaro l'array che conterrà i numeri del computer
var numeriComputer = [];
// 2. generazione numeri per il computer casuali da inserire nell'array
while (numeriComputer.length < 16){
  var numero = generaNumeroRandom(1, nMaxBombe);
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
function inArray(numbersList, element) {
  var i = 0;
  var trovato = false;
  while (i < numbersList.length && trovato == false) {
    if (numbersList[i] == element) {
      trovato = true;
    }
    i++;
  }
  return trovato;
}
// 3. chiedo all'utente di inserire dei numeri tra 1 e 100
var numeriUtente = [];
var numeroUtente;
var possibilita = nMaxBombe - 16;
var presente = false;

while ( numeriUtente.length < possibilita && presente == false){
  numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e " + nMaxBombe));
  // controllo se i numeri inseriti non sono presenti nei numeri del computer e se si inserisce un numero valido
  if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > nMaxBombe){
    alert("Stai inserendo un numero sbagliato");
  } else if (inArray(numeriComputer, numeroUtente)){
    presente = true;
  } else if (inArray(numeriUtente, numeroUtente) == true){
    alert("Inserisci un altro numero, questo lo avevi già inserito!");
  } else {
    numeriUtente.push(numeroUtente);
  }
}
console.log(numeriUtente);

// 4. la partita termina se l'utente inserisce il numero bomba
if (presente == true){
  console.log("Hai trovato il numero bomba dopo aver inserito " + numeriUtente.length + " numeri validi");
} else {
  console.log("Bravo, hai vinto!");
}
