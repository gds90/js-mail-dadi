// 1) creo la costante mail_list con 3 indirizzi email all'interno
const mail_list = ['fabrizio@boolean.it', 'antonio@boolean.it', 'thomas@boolean.it']

// 2) dichiaro una variabile e permetto all'utente di inserirne il valore tramite prompt;
let mail = prompt('Inserisci la tua email:')

// Dichiaro una variabile flag che mi permetterà di verificare se la mail è presente o meno nell'array
let flag = false;

// 3) tramite un ciclo For, confronto la mail inserita dall'utente con quelle presenti nell'array una alla volta;
for (let i=0; i<mail_list.length; i++){

    // 4) Se la mail inserita dall'utente è uguale ad una presente nell'arrey:
    if (mail === mail_list[i]) {
        flag = true;
    }
}

// Verifico il valore di flag per stampare il messaggio corretto
if (flag == true){

    // 4a) stampo in console un messaggio sull'esito positivo
    console.log("La mail inserita è presente nella lista delle mail autorizzate, benvenuto!")
} 
else {

    // 5) altrimenti stampo in console un messaggio sull'esito negativo
    console.log('La mail inserita non è presente nella lista delle mail autorizzate, non puoi accedere.')
}
