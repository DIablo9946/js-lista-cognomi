// Faccio un controllo
// console.log("Ciao");

// Mi preparo le variabili

var cognomi, cognutente, stampa;

stampa = document.getElementById('my');
// Creo l'array degli cognomi

cognomi = ["Moretti", "Alfani", "Bartolini", "Zazzone", "Privotti"];
console.log(cognomi);


// Chiedo il cognome all'utente
cognutente = prompt("Inserisci il Tuo cognome");
console.log("Il cognome dell'utente è " + cognutente);

// Inserisco il cognome dell'utente nell'array
cognomi.push(cognutente);
console.log(cognomi);

// Stampo la lista nell'ordine alfabetico
stampa.innerHTML = cognomi;

// Dico all'utente a che posto si trovi
// stampa.innerHTML = "Il Tuo cognome si trova al " + " posto";
