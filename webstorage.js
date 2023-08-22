// 1) localStorage --> permanenza dei dati finché l'utente non cancella i dati del browser o lo storage manualmente
// 2) sessionStorage --> permanenza dei dati finché il tab o la finestra non viene chiusa

// utilizziamo gli stessi metodi per entrambe le tipologie di storage:
// .setItem() --> salva elemento con chiave/valore
// .getItem() --> cerca un elemento già salvato con una determinata chiave (torna null se non trovata)
// il valore tornato dallo storage è SEMPRE una stringa

// .removeItem() --> rimuove una singola chiave dallo storage e conseguente valore
// .clear() --> rimuove tutti i dati dallo storage per uno specifico dominio

localStorage.setItem("liveClass", true); // verrà convertito in stringa "true"

const isLive = localStorage.getItem("liveClass");
console.log(typeof parseInt(isLive));

const removeKey = function () {
  localStorage.removeItem("liveClass");

  console.log(localStorage.getItem("liveClass"));
};

// numero viene convertito in stringa
localStorage.setItem("numberItem", 580);
console.log(localStorage.getItem("numberItem"));
// array viene convertito in stringa con le virgole
localStorage.setItem("arrayItem", JSON.stringify([580, 5, 10]));
const arrItem = localStorage.getItem("arrayItem"); // "[580, 5, 10]"
console.log(arrItem); // la stringa in notazione JSON dell'array "[580, 5, 10]"
const arrItemParsed = JSON.parse(arrItem); // converte la stringa dell'array in un vero array
console.log(Array.isArray(arrItemParsed));
console.log(arrItemParsed[0]);

const myObj = { name: "Stefano", location: { area: "Europe" } };

localStorage.setItem("objItem", JSON.stringify(myObj));
const objStringified = localStorage.getItem("objItem"); // "{ "name": "Stefano" }"
const objectParsed = JSON.parse(objStringified); // { name: "Stefano" }
console.log(objectParsed.location.area);

localStorage.setItem("date", new Date());
const prevDateStr = localStorage.getItem("date");
const prevDate = new Date(prevDateStr);

document.body.innerHTML += prevDate.toLocaleString();
document.body.innerHTML += JSON.stringify({ name: "Stefano" });
