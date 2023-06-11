const gameboardModule = (() => {
    let gameboard = ['O', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ']

    return {gameboard}

}) ();

// gameboardModule.gameboard[0] = 'X';

const playerFactory = (name, sign) => {
    return {name, sign}
}
  
const playerOne = playerFactory("Bob", "X")
const playerTwo = playerFactory("Rob", "O")

const renderGameboard = (gameboard) => {
    for (let i = 0; i < gameboard.length; i++) {
      const cell = document.querySelector(`#cell-${i}`);
      cell.textContent = gameboard[i];
    }
};

renderGameboard(gameboardModule.gameboard)
