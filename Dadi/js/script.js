// 1) Dichiaro 2 variabili, una per il giocatore e l'altra per il computer, ad entrambe assegno un valore con un numero random da 1 a 6;
let player_number = parseInt(Math.random() * 6) +1;
let cpu_number = parseInt(Math.random() * 6) +1;

// 2) Mostro in console il valore delle due variabili;
console.log("Il punteggio del giocatore è " + player_number)
console.log("Il punteggio della CPU è " + cpu_number)

// 3) Confronto la variabile del giocatore con la variabile del computer;

// 4) se il numero del giocatore è più alto del numero del computer:
if (player_number > cpu_number){

    // 4a) stampo in console "Giocatore vince il gioco dei dadi";
    console.log("Il giocatore ha battuto la CPU")

// 5) se il numero del computer è più alto del numero del giocatore:
} else if (cpu_number > player_number){
    
    // 5a) stampo in console "Computer vince il gioco dei dadi";
    console.log("La CPU ha battuto il giocatore")

// 6) altrimenti vorrà dire che i numeri sono uguali e dunque stampo in console "Pareggio, entrambi i giocatori hanno lo stesso numero";
} else {
    console.log("Pareggio, entrambi i giocatori hanno lo stesso numero")
}