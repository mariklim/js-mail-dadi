// 1. Creo la lista delle mail
// 2. Chiedo all’utente la sua email
// 3. Controllo che l’utente sia nella lista
// 4. Stampo un messaggio appropriato sull’esito del controllo

var listMail = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com"]
var mail = prompt("Inserisci la tua mail");

for (var i = 0; i < listMail.length; i++){
    if (mail == listMail[i]){
        document.getElementById("messagio").innerHTML = "ok sei loggato"}
    else{
        document.getElementById("messagio").innerHTML = "non sei loggato";}
    }




