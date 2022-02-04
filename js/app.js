// chiedere all'utente quanti km deve percorrere
// chiedere all'utente quanti anni ha
// prezzo totale del viaggio = km * 0.21 €
// se il passeggero è minorenne -20% di sconto del totale
// se il passeggero è over 65 -40% di sconto del totale
// se no prezzo pieno
// inserire nell'html il prezzo finale con massimo due decimali

const km = prompt('Quanti chilometri devi percorrere?');
console.log(km);
const anni = prompt('Quanti anni hai?');
console.log(anni);

const prezzoKm = 0.21;

let prezzoBase = km * prezzoKm;




if (anni < 18) {
    totale = prezzoBase - ((prezzoBase * 20) / 100);
} else if (anni >= 65) {
    totale = prezzoBase - ((prezzoBase * 40) / 100);
} else if (18 >= anni < 65) {
    totale = prezzoBase;
}



console.log(totale);