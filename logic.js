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
                    checkWinner()
                    switchPlayer();
                }
            });
        }
    });

    let checkWinner = () => {
        let gameboard = gameboardModule.gameboard;
        let winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (let i = 0; i < winningCombinations.length; i++) {
            let [a, b, c] = winningCombinations[i];
            if (gameboard[a] !== ' ' && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {
                alert(`${currentPlayer.name} wins!`);
                return
            }
        }

        if (!gameboard.includes(' ')) {
            alert("It's a draw!");
        }
    };

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

gameModule.setupEventListeners(); //could alternatively call setUpEventListeners from inside gameModule & not return anything