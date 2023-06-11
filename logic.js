const gameboardModule = (() => {
    
    let gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

    let renderGameboard = () => {
        for (let i = 0; i < gameboard.length; i++) {
            const cell = document.querySelector(`#cell-${i}`);
            cell.textContent = gameboard[i];
          }
    }

    return {gameboard, renderGameboard}

}) ();

const playerFactory = (name, sign) => {
    return {name, sign}
}
  
const playerOne = playerFactory("Bob", "X")
const playerTwo = playerFactory("Rob", "O")
let currentPlayer = playerOne


for (let i = 0; i < gameboardModule.gameboard.length; i++) {
    const cell = document.querySelector(`#cell-${i}`);
    cell.addEventListener("click", function() {
        if (gameboardModule.gameboard[i] == " ") {          //Checks that the cell hasn't already been marked
            gameboardModule.gameboard[i] = currentPlayer.sign
            gameboardModule.renderGameboard()
            if (currentPlayer == playerOne) {               //Switches the player
                currentPlayer = playerTwo
            } else {
                currentPlayer = playerOne
        }}

    });
}