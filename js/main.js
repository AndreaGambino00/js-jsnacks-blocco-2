// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
// do {
//     var userNumber = parseInt(prompt('Inserisci un numero'));
// } 

// if (userNumber % 2 == 0){
//     console.log(userNumber);
// } 
// else {
//     console.log(userNumber + 1);
// }




// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
// var names, surnames, numberList = 4, randomName,randomSurname;

// nomi = ['Andrea','Luca','Gino','Rosario']

// cognomi = ['Rossi','Bianchi','Gialli','Verdi'] 

// for (var i = 0; i < numberList; i++){
//     randomName = nomi[Math.floor(Math.random() * nomi.length)];
//     randomSurname = cognomi[Math.floor(Math.random() * cognomi.length)];

//     console.log(randomName + ' ' + randomSurname);
// }




// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// var num = [];
// var somma = 0;

// for (var i = 0; i < 10; i++) {
//     num.push(i);
    
// if (i % 2 !=0){
//         somma = somma + num[i];
//     }
// }
// console.log(num)
// console.log(somma)



//Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };


// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga

// var frase = parseInt(prompt('Inserisci una parola'));
// var frase2 = parseInt(prompt('Inserisci una seconda parola'));

// var parole = frase.split(' ');
// console.log(parole);

// var max = parole[0];


// for(var i = 0; i < parole.length; i++){
//   if(parole[i].length > max.length ){
//     max = parole[i];
//   }
// }

// console.log('la parola più lunga è: ' + max);





