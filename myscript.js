//Chiedere all'utente il suo nome
var nome_utente = prompt('Digita il tuo nome');
console.log(nome_utente);
//Chiedere all'utente il suo cognome
var cognome_utente = prompt('Digita il tuo cognome');
console.log(cognome_utente);
document.getElementById('title').innerHTML = 'Benvenuto/a';
document.getElementById('avatar').innerHTML = ''
//Chiedere all'utente il suo colore preferito
var colore_preferito = prompt('Digita il tuo colore preferito');
console.log(colore_preferito);
//inserimento numero 20
var numero = 20;
//Scrivere sulla pagina nome-cognome-colore-20
//document.writeln('La tua password è: ' + nome_utente + cognome_utente + colore_preferito);
document.getElementById('password').innerHTML = 'La tua password è: ' + nome_utente + cognome_utente + colore_preferito + numero;
//document.getElementById('title').innerHTML = 'Benvenuto/a';
//document.getElementById('avatar').innerHTML = '';
