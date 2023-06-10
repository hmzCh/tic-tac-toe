// const gameboardFactory = (gameboard) => {
//     return {gameboard};
// };

// const match = gameboardFactory([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);

const gameboardModule = (() => {
    let gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

    return {gameboard}

}) ();

console.log(gameboardModule.gameboard); // [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

gameboardModule.gameboard[0] = 'X';
console.log(gameboardModule.gameboard); // ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']





const playerFactory = (name, sign) => {
    return {name, sign}
}
  
const playerOne = playerFactory("Bob", "X")
const playerTwo = playerFactory("Rob", "O")
