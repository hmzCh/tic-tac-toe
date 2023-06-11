const gameboardModule = (() => {
    let gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

    return {gameboard}

}) ();

const playerFactory = (name, sign) => {
    return {name, sign}
}
  
const playerOne = playerFactory("Bob", "X")
const playerTwo = playerFactory("Rob", "O")
let currentPlayer = playerOne

const renderGameboard = (gameboard) => {
    for (let i = 0; i < gameboard.length; i++) {
      const cell = document.querySelector(`#cell-${i}`);
      cell.textContent = gameboard[i];
    }
};

for (let i = 0; i < gameboardModule.gameboard.length; i++) {
    const cell = document.querySelector(`#cell-${i}`);
    cell.addEventListener("click", function() {
        if (gameboardModule.gameboard[i] == " ") {          //Checks that the cell hasn't already been marked
            gameboardModule.gameboard[i] = currentPlayer.sign
            renderGameboard(gameboardModule.gameboard)
            if (currentPlayer == playerOne) {
                currentPlayer = playerTwo
            } else {
                currentPlayer = playerOne
        }}

    });
}