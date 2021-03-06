// chiedere all'utente quanti km deve percorrere
// chiedere all'utente quanti anni ha
// prezzo totale del viaggio = km * 0.21 €
// se il passeggero è minorenne -20% di sconto del totale
// se il passeggero è over 65 -40% di sconto del totale
// se no prezzo pieno
// inserire nell'html il prezzo finale con massimo due decimali


let km = prompt('Quanti chilometri devi percorrere?') * 1;
while (km == null || /\D/.test(km) || km == "") {
    km = prompt("Inserisci un valore valido: ");
};

let anni = prompt('Quanti anni hai?') * 1;
while (anni == null || /\D/.test(anni) || anni == "") {
    anni = prompt("Inserisci un valore valido: ");
};

const prezzoKm = 0.21;

let prezzoBase = (km * prezzoKm) * 1;

if (anni <= 0) {
    alert("Valore non accettato");
    location.reload();
} else if (anni >= 150) {
    alert("Valore non accettato");
    location.reload();
} else if (anni < 18) {
    totale = prezzoBase - ((prezzoBase * 20) / 100);
} else if (anni >= 65) {
    totale = prezzoBase - ((prezzoBase * 40) / 100);
} else if (18 >= anni < 65) {
    totale = prezzoBase;
}

let risultato = 'Devi pagare ' + totale.toFixed(2);

alert(risultato);


document.getElementById('totale_prezzo').innerHTML += totale.toFixed(2);
