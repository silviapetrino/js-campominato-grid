# js-campominato-grid
Griglia Campo Minato. L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


1. Imposto gli elementi statici in markup con html/css: un bottone, un select menu, un container per la griglia, i quadrati.

2. in Javascript: 
   - inserisco il container in una variabile, sarà l'ambiente in cui stampare i quadrati;
  - prendo il bottone e creo una funzione per inizializzare il gioco;
  - creo una funzione di reset per svuotare il container;
  - Creo una funzione per generare un quadrato;
  - creo un ciclo per stampare 100 volte il quadrato;
  - inserisco il ciclo all'interno dell'evento click del bottone;

 // bonus 

1- creo una variabile per prendere l'id del select menu;

2-  creo il markup degli altri quadrati (livello medio e livello difficile);

3- creo altre due funzioni che generino quadrati diversi;

4- creo altre due funzioni per inserirli dentro al container;

5- tolgo il bottone da dentro la funzione creata per inizializzare il gioco semplice;

6- creo delle condizioni: stabilisco che, cliccando il bottone, si inizializzi una funzione diversa seconda della scelta selezionata.