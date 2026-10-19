const km = document.getElementById("km");
const eta = document.getElementById("fasciaEta");
const button = document.querySelector("button");
const risultato = document.getElementById("risultato");
const modulo = document.querySelector("form");

const euroAlKm = 1;

let totale;
//20% minorenne
//40% over 65
modulo.addEventListener("submit", (event) => {
    event.preventDefault();

    const kms = km.value;

    if (eta.value === "0") {
        window.alert("Per favore inserire una fascia d'età")
    } else if (eta.value === "1") {
        totale = kms * euroAlKm * 0.8;
        risultato.innerHTML = totale;
    } else if (eta.value === "2") {
        totale = kms * euroAlKm;
        risultato.innerHTML = totale;
    } else if (eta.value === "3") {
        totale = kms * euroAlKm * 0.6;
        risultato.innerHTML = totale;
    }
})