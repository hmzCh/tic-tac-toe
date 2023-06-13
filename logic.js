const gameboardModule = (() => {;   
    let gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

    let renderGameboard = () => {;
        for (let i = 0; i < gameboard.length; i++) {;
            const cell = document.querySelector(`#cell-${i}`);
            cell.textContent = gameboard[i];
          }
    }

    return {gameboard, renderGameboard};
}) ();

const playerFactory = (name, sign) => {;
    return {name, sign};
};

const gameModule = (() => {
    let playerOne = playerFactory('Player One', 'X');
    let playerTwo = playerFactory('Player Two', 'O');
    // let playerOne = playerFactory(prompt("Please enter the first player's name"), "X");
    // let playerTwo = playerFactory(prompt("Please enter the second player's name"), "O");
    let currentPlayer = playerOne;
    let messageBox = document.querySelector('#messageBox');
    let restartButton = document.querySelector('#restartButton');
    let disableMarking = false;

    let setupGame = (() => {;

        updateMessageBox();

        restartButton.addEventListener("click", function () {;  //Sets up the event listener for the restart button
            resetGame();
        });

        for (let i = 0; i < gameboardModule.gameboard.length; i++) {;   //Sets up the event listener for the cells
            const cell = document.querySelector(`#cell-${i}`);
            cell.addEventListener("click", function () {;
                if (gameboardModule.gameboard[i] == " " && disableMarking == false) {;  //Checks that the cell hasn't already been marked & that the game hasn't ended
                    gameboardModule.gameboard[i] = currentPlayer.sign;
                    gameboardModule.renderGameboard();
                    if (checkWinner() == false) {;
                        switchPlayer();
                        updateMessageBox();
                    } else {;
                        disableMarking = true;
                    };
                };
            });
        };
    });

    let updateMessageBox = (() => {messageBox.textContent = currentPlayer.name + "'s turn"});

    let checkWinner = () => {;
        let gameboard = gameboardModule.gameboard;
        let winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (let i = 0; i < winningCombinations.length; i++) {;
            let [a, b, c] = winningCombinations[i];
            if (gameboard[a] !== ' ' && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {;
                messageBox.textContent = currentPlayer.name + "'s wins!";
                return true
            }
        }

        if (!gameboard.includes(' ')) {;
            messageBox.textContent = "It's a draw.";
            return true;
        };

        return false;
    };

    let switchPlayer = () => {;
        if (currentPlayer == playerOne) {;
            currentPlayer = playerTwo;
        } else {;
            currentPlayer = playerOne;
        };
    };

    let resetGame = () => {;
        for (let i = 0; i < gameboardModule.gameboard.length; i++){;
            gameboardModule.gameboard[i] = ' ';
        };
        gameboardModule.renderGameboard();
        currentPlayer = playerOne;
        updateMessageBox();
        disableMarking = false;
    };

    return {
        setupGame: setupGame
    };
})();

gameModule.setupGame(); //Could alternatively call setUpEventListeners from inside gameModule & not return anything