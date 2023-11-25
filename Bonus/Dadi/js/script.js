// creo la costante mail_list con 3 indirizzi email all'interno
const mail_list = ['fabrizio@boolean.it', 'antonio@boolean.it', 'thomas@boolean.it']

// creo una variabile flag che mi permetterà di fare il controllo della mail inserita dall'utente al momento del click sul tasto Tira i dadi
let flag = false;

// associo la costante reset_button al tasto per il log-out
const reset_button = document.querySelector('.btn-dark');

// associo la costante login_button al tasto per il log-in
const login_button = document.querySelector('.btn-light');

// creo una funzione al click del tasto log-in
login_button.addEventListener('click', function(){
    
    // dichiaro una variabile mail a cui associo il valore del campo input email
    let mail = document.getElementById('mail').value;
    
    // tramite un ciclo for, controllo che la mail inserita dall'utente sia nell'elenco delle email autorizzate
    for (let i=0; i<mail_list.length; i++){

        // 4) Se la mail inserita dall'utente è uguale ad una presente nell'arrey, flag prende true come valore
        if (mail === mail_list[i]) {
            flag = true;
        }
    }
    
    // controllo se il campo input mail è vuoto
    if (document.getElementById('mail').value === ''){
        
        // richiedo all'utente di inserire un indirizzo e-mail valido tramite DOM
        document.getElementById('login_message').innerText = "Inserisci un indirizzo e-mail valido per iniziare il gioco.";
    }   

    // se il campo input non risulta vuoto procedo con l'avvio del gioco dei dadi, sfruttando la variabile flag
    else {

        // se flag è uguale a true
        if (flag){
            
            // disabilito il campo email input per evitare che venga rimosso l'email per accedere al gioco
            document.getElementById('mail').disabled = true;

            // informo l'utente tramite DOM che il log-in è stato eseguito
            document.getElementById('login_message').innerText = "La mail inserita è presente nella lista delle mail autorizzate, benvenuto!";

            

            // dichiaro due variabili a cui associo un numero random da 1 a 6
            let player_number = Math.floor(Math.random() * 6) +1;
            let cpu_number = Math.floor(Math.random() * 6) +1;
            
            // rendo visibile l'area di gioco
            document.getElementById("game_area").style.opacity = "1";
            
            // mostro il valore delle due variabili tramite DOM
            document.querySelector('.player_number').innerText = player_number;
            document.querySelector('.cpu_number').innerText = cpu_number;
            
            // controllo il vincitore della partita mettendo a confronto i due numeri random estratti
            if (player_number > cpu_number){
                
                // se il numero del giocatore è più alto informo l'utente della vittoria tramite DOM
                document.getElementById('result_message').innerText = "Complimenti, hai vinto!";
                document.getElementById("result_area").style.opacity = "1";
                
            } else if (cpu_number > player_number){
                
                // se il numero del computer è più alto informo l'utente della sconfitta tramite DOM
                document.getElementById('result_message').innerText = "Hai perso, ritenta di nuovo!";
                document.getElementById("result_area").style.opacity = "1";
                
                // 6) altrimenti vorrà dire che i numeri sono uguali e dunque stampo in console "Pareggio, entrambi i giocatori hanno lo stesso numero";
            } else {
                document.getElementById('result_message').innerText = "Pareggio, peccato!";
                document.getElementById("result_area").style.opacity = "1";
            }
            
        } 

        // se flag è false allora informo l'utente che la mail inserita non è presente nell'elenco delle mail autorizzate
        else {
            
            document.getElementById('login_message').innerText = "La mail inserita non è presente nella lista delle mail autorizzate, non puoi accedere.";
            
            // pulisco il campo input email
            document.getElementById('mail').value = '';
        }
    }
})


// creo la funzione del tasto Log-out
reset_button.addEventListener('click', function(){

    // pulisco il campo input email
    document.getElementById('mail').value = '';

    // ripristino il messaggio di login su quello iniziale
    document.getElementById('login_message').innerText = "Effettua il log-in:";

    // rendo di nuovo invisibile l'area game
    document.getElementById("game_area").style.opacity = "0";

    // rendo invisibile l'area del risultato della partita
    document.getElementById("result_area").style.opacity = "0";

    // rendo flag = false
    flag = false;

    // rendo il campo input mail abilitato
    document.getElementById('mail').disabled = false;
})


