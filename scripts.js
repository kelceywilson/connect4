/**
 * Creates new board
 *
 * @param {number} [height=6]
 * @param {number} [width=7]
 * @returns Array
 */
function newBoard(height = 6, width = 7) {
  const matrix = [];

  for (let y = 0; y < height; y++) {
    matrix[y] = [];
    for (var x = 0; x < width; x++) {
      matrix[y][x] = 0;
    }
  }
  // Last index will keep track of turn
  matrix.push(1);
  return matrix;
}

/**
 * Finds first empty row in selected column
 *
 * @param {array} board
 * @param {number} column
 * @returns Integer
 */
function findRow(board, column) {
  let row;
  // Refactor for performance & best practices?
  for (row = 0; row < board.length; row++) {
    if (board[row][column] !== 0) {
      if (row === 0) {
        return "full";
      } else {
        return row - 1;
      }
    }
  }
  return row - 1;
}

/**
 * Places current player's token on board
 *
 * @param {array} board
 * @param {number} player
 * @param {number} column
 * @param {number} row
 */
function addToken(board, player, column, drops) {
  let row = findRow(board, column);
  console.log("board", board);
  board[row][column] = player;
  colorCell(row, column, player);
  return board;
}

function status(board) {
  // Check for horizonatl win
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        (board[i][j] === 1 || board[i][j] === 2) &&
        (board[i][j] === board[i][j + 1] &&
          board[i][j + 1] === board[i][j + 2] &&
          board[i][j + 2] === board[i][j + 3])
      ) {
        console.log("player", board[i][j], "wins");
      }
    }
  }
  // Check for vertical win
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      if (
        (board[i][j] === 1 || board[i][j] === 2) &&
        (board[i][j] === board[i + 1][j] &&
          board[i + 1][j] === board[i + 2][j] &&
          board[i + 2][j] === board[i + 3][j])
      ) {
        console.log("player", board[i][j], "wins");
      }
    }
  }
  // Check for diagonal falling win
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        (board[i][j] === 1 || board[i][j] === 2) &&
        (board[i][j] === board[i + 1][j + 1] &&
          board[i + 1][j + 1] === board[i + 2][j + 2] &&
          board[i + 2][j + 2] === board[i + 3][j + 3])
      ) {
        console.log("player", board[i][j], "wins");
      }
    }
  }
  // Check for diagonal rising win
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        (board[i][j + 3] === 1 || board[i][j + 3] === 2) &&
        (board[i][j + 3] === board[i + 1][j + 2] &&
          board[i + 1][j + 2] === board[i + 2][j + 1] &&
          board[i + 2][j + 1] === board[i + 3][j])
      ) {
        console.log("player", board[i][j + 3], "wins");
      }
    }
  }

  // return `Player ${chip} Wins!`
  // return  'Tie game!'
}
////////////////////////
//   EVENT HANDLING   //
////////////////////////

/**
 * Colors header chips according to turn
 *
 * @param {number} player
 * @param {NodeList} drops
 */
function colorHeaderChips(drops, player) {
  for (let i = 0; i < drops.length; i++) {
    drops[i].className = `drop chip${player}`;
  }
}

/**
 * Color cell as played token
 *
 * @param {number} row
 * @param {number} column
 * @param {number} player
 */
function colorCell(row, column, player) {
  document.getElementById(`r${row}${column}`).className = `chip chip${player}`;
}

function addListeners(board, player, drops) {
  for (let i = 0; i < drops.length; i++) {
    drops[i].addEventListener("click", function() {
      addToken(board, player, i);
      status(board);
      player = player === 1 ? 2 : 1;
      colorHeaderChips(drops, player);
      // Add one to turn count
      board[6]++;
      if (board[6] === 43) {
        alert("game over");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Reload page resets game board and starts with player 1
  const board = newBoard();
  let player = 1;
  const drops = document.querySelectorAll(".drop");
  colorHeaderChips(drops, player);
  addListeners(board, player, drops);

  // const rows = document.querySelectorAll(".row");
  // console.log(rows);
  // console.log(board);
  // addToken(board, player, 5);
});
