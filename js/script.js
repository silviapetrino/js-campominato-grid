
const button = document.getElementById("start-game");
const container = document.querySelector(".container_sp");
const gameChoise = document.getElementById("game-difficult");


  // al click del bottone la scelta di gioco selezionata attiva la funzione corrispondente

button.addEventListener("click", function () {
  resetGame();
  if (gameChoise.value === "easy") {
    startGameEasy();
  } else if (gameChoise.value === "medium") {
    startGameMedium();
  } else if (gameChoise.value === "hard") {
    startGameHard();
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

  function startGameHard(){

    for(i = 1; i < 50; i++) {
      const square = createSquareHard(i);
      container.append(square);
      square.addEventListener("click", function(){
      this.classList.toggle("active");
      console.log(this.id);
      })
    } 
  }




  // i quadrati sono creati in base alla difficoltà del gioco scelta 

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


function createSquareHard(index) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square-hard");
  newSquare.innerHTML = ""
  newSquare.id = index;
  return newSquare;
}

