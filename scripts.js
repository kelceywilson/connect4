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
function addToken(board, player, column) {
  let row = findRow(board, column);
  console.log("board", board);
  board[row][column] = player;
  return board;
}

////////////////////////
//   EVENT HANDLING   //
////////////////////////

/**
 * Colors header chips according to turn
 *
 * @param {number} turn
 * @param {NodeList} drops
 */
function colorDropChip(board, player, drops) {
  for (let i = 0; i < drops.length; i++) {
    drops[i].className = `drop chip${player}`;
    drops[i].addEventListener("click", function() {
      console.log(board, player, i);

      addToken(board, player, i);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Reload page resets game board and starts with player 1
  const board = newBoard();
  let player = 1;
  const drops = document.querySelectorAll(".drop");
  colorDropChip(board, player, drops);

  console.log(board);
  // addToken(board, player, 5);
});
