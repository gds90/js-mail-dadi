Esercizio di oggi:
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Attenzione: l'utilizzo della funzione includes non è ammesso. Se usato, comporta la non validità dell'esercizio.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

<!-- SOTTOPROBLEMI MAIL -->
1) dichiaro una variabile array contenente l'elenco di vari indirizzi email;
2) dichiaro una variabile e permetto all'utente di inserirne il valore tramite prompt;
3) tramite un ciclo For, confronto la mail inserita dall'utente con quelle presenti nell'array una alla volta;
4) Se la mail inserita dall'utente è uguale ad una presente nell'arrey:
    4a) stampo in console un messaggio sull'esito positivo;
5) altrimenti stampo in console un messaggio sull'esito negativo;

<!-- SOTTOPROBLEMI DADI -->
1) Dichiaro 2 variabili, una per il giocatore e l'altra per il computer, ad entrambe assegno un valore con un numero random da 1 a 6;
2) Mostro in console il valore delle due variabili;
3) Confronto la variabile del giocatore con la variabile del computer;
4) se il numero del giocatore è più alto del numero del computer:
    4a) stampo in console "Giocatore vince il gioco dei dadi";
5) se il numero del computer è più alto del numero del giocatore:
    5a) stampo in console "Computer vince il gioco dei dadi";
6) altrimenti vorrà dire che i numeri sono uguali e dunque stampo in console "Pareggio, entrambi i giocatori hanno lo stesso numero";