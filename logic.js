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

const gameModule = (() => {
    let playerOne = playerFactory("Bob", "X");
    let playerTwo = playerFactory("Rob", "O");
    let currentPlayer = playerOne;

    let switchPlayer = () => {
        if (currentPlayer == playerOne) {
            currentPlayer = playerTwo;
        } else {
            currentPlayer = playerOne;
        }
    };

    return {
        playerOne,
        playerTwo,
        get currentPlayer() {       //I need a getter function for currentPlayer but not for playerOne or playerTwo because the value of those two don't change during the game but currentPlayer does
            return currentPlayer;
        },
        switchPlayer,
    };
})();



for (let i = 0; i < gameboardModule.gameboard.length; i++) {
    const cell = document.querySelector(`#cell-${i}`);
    cell.addEventListener("click", function() {
        if (gameboardModule.gameboard[i] == " ") {          //Checks that the cell hasn't already been marked
            gameboardModule.gameboard[i] = gameModule.currentPlayer.sign
            gameboardModule.renderGameboard()
            gameModule.switchPlayer()
        }
    });
}