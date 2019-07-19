// Faccio un controllo
// console.log("Ciao");

// Mi preparo le variabili

var cognomi, cognutente, stampa, temp, posto;


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

// Stampo la lista
for (var i = 0; i < cognomi.length; i++) {
  temp = stampa.innerHTML;
  console.log(temp);
  cognomi.sort(); // Faccio la stampa in maniera alfabetica
  stampa.innerHTML = temp + "<li>" + cognomi[i] + "</li>";

}

// Dico all'utente a che posto si trovi
var posto = cognomi.indexOf(cognutente);
stampa.innerHTML += "Il tuo cognome si trova al " + posto + " posto";
