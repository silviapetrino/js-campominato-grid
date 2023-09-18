// # js-campominato-grid
// Griglia Campo Minato. L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// 1. Imposto gli elementi statici in markup con html/css: un bottone, un select menu, un container per la griglia, i quadrati.

// 2. in Javascript: prendo gli elementi da generare dinamicamente.
//   - inserisco il container in una variabile, sarà l'ambiente in cui stampare i quadrati;
//   - prendo il bottone e creo una funzione per inizializzare il gioco;
//   - creo una funzione di reset per svuotare il container;
//   - Creo una funzione per generare un quadrato;
//   - creo un ciclo per stampare 100 volte il quadrato;
// aggiungo la classe active al quadrato 

// bonus
// 1- creo una variabile per prendere l'id del select menu
// 2- in base al valore sleezionato parte una funzione di gioco diversa
 
const button = document.getElementById("start-game");
const container = document.querySelector(".container_sp");
const gameChoise = document.getElementById("game-difficult");




button.addEventListener("click", function () {
  resetGame();
  if (gameChoise.value === "easy") {
    startGameEasy();
  } else if (gameChoise.value === "medium") {
    startGameMedium();
  }
});



// *********functions*************


function resetGame() {
  return container.innerHTML = " ";
}

function startGameEasy(){
    resetGame()

    for(i = 1; i < 101; i++) {
      const square = createSquare(i);
      container.append(square);
      square.addEventListener("click", function(){
      this.classList.toggle("active");
      console.log(this.id)
      })
    }
  }
  

function startGameMedium(){

    for(i = 1; i < 82; i++) {
      const square = createSquareMedium(i);
      container.append(square);
      square.addEventListener("click", function(){
      this.classList.toggle("active");
      console.log(this.id);
      })
    } 
  }





function createSquare(index) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square-easy");
  newSquare.innerHTML = ""
  newSquare.id = index;
  return newSquare;
}


function createSquareMedium(index) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square-medium");
  newSquare.innerHTML = ""
  newSquare.id = index;
  return newSquare;
}

