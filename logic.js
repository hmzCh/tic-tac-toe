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
    // let playerOne = playerFactory(prompt("Please enter the first player's name"), "X");
    // let playerTwo = playerFactory(prompt("Please enter the second player's name"), "O");
    let currentPlayer = playerOne;

    let setupEventListeners = (() => {
        for (let i = 0; i < gameboardModule.gameboard.length; i++) {
            const cell = document.querySelector(`#cell-${i}`);
            cell.addEventListener("click", function () {
                if (gameboardModule.gameboard[i] == " ") {      //Checks that the cell hasn't already been marked
                    gameboardModule.gameboard[i] = currentPlayer.sign;
                    gameboardModule.renderGameboard();
                    switchPlayer();
                }
            });
        }
    });

    let switchPlayer = () => {
        if (currentPlayer == playerOne) {
            currentPlayer = playerTwo;
        } else {
            currentPlayer = playerOne;
        }
    };

    return {
        // playerOne,
        // playerTwo,
        // get currentPlayer() {
        //     return currentPlayer;
        // },
        // switchPlayer,
        setupEventListeners
    };
})();

gameModule.setupEventListeners(); //could aternatively call setUpEventListeners from inside gameModule & not return anything