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

function colorCell(row, column, player) {
  document.getElementById(`r${row}${column}`).className = `chip chip${player}`;
}

function dropToken(board, player, drops, turn) {
  for (let i = 0; i < drops.length; i++) {
    // colorHeaderChips(drops, player);
    drops[i].addEventListener("click", function() {
      addToken(board, player, i);
      player = player === 1 ? 2 : 1;
      colorHeaderChips(drops, player);
      turn++;
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Reload page resets game board and starts with player 1
  const board = newBoard();
  let turn = 1;
  let player = 1;
  const drops = document.querySelectorAll(".drop");
  colorHeaderChips(drops, player);

  // dropToken(board, player, drops, turn);

  // const rows = document.querySelectorAll(".row");
  // console.log(rows);
  console.log(board);
  // addToken(board, player, 5);
});
