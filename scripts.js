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
 * @param {*} board
 * @param {*} column
 * @returns Integer
 */
function findRow(board, column) {
  let row;
  // Refactor for performance & best practices?
  for (row = board.length - 1; row >= 0; row--) {
    if (board[row][column] === 0) {
      return row;
    } else {
      return "row already full";
    }
  }
  return row;
}

/**
 * Places current player's token on board
 *
 * @param {*} board
 * @param {*} player
 * @param {*} column
 * @param {*} row
 */
function addToken(board, player, column, row) {
  player === 1 ? 1 : 2;
  board[row][column] = player;
  return board;
}

const board = newBoard();
console.log(board);
