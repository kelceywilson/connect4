/**
 * Creates new 6x7 matrix of 0s
 * representing the game board
 *
 * @param {number} [height=6]
 * @param {number} [width=7]
 * @returns Array
 */
function newBoard(board, height = 6, width = 7) {
  board = [];
  for (let y = 0; y < height; y++) {
    board[y] = [];
    for (var x = 0; x < width; x++) {
      board[y][x] = 0;
    }
  }
  // Last index will keep track of turn
  board.push(1);
  console.log("newBoard", board);

  return board;
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
      // If top row of selected column is full, return -1
      // to send error and reset addToken function
      if (row === 0) {
        return -1;
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
  console.log("row", row);
  board[row][column] = player;
  colorCell(row, column, player);
  // status(board);
  // player = player === 1 ? 2 : 1;
  // colorHeaderChips(drops, player);
  // const messages = document.querySelector(".messages");
  // messages.innerHTML = `Player ${player}'s Turn`;
  // // Add one to turn count
  // board[6]++;
  // if (board[6] === 43) {
  //   alert("game over");
  // }
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

function resetAllCells() {
  const allChips = document.querySelectorAll(".chip");
  allChips.forEach(chip => {
    chip.className = "chip chip0";
  });
}

function addListeners(board, player, drops) {
  for (let i = 0; i < drops.length; i++) {
    drops[i].addEventListener("click", function() {
      board = addToken(board, player, i, drops);
      status(board);
      player = player === 1 ? 2 : 1;
      colorHeaderChips(drops, player);
      const messages = document.querySelector(".messages");
      messages.innerHTML = `Player ${player}'s Turn`;
      // Add one to turn count
      board[6]++;
      if (board[6] === 43) {
        alert("game over");
      }
    });
  }
}

function newGame(board) {
  let player = 1;
  board = newBoard();
  const drops = document.querySelectorAll(".drop");
  colorHeaderChips(drops, player);
  addListeners(board, player, drops);
  // messages.innerHTML = "Player 1 - Click on a chip to drop into its column";
  // restart.innerHTML = "RESTART GAME";
}

document.addEventListener("DOMContentLoaded", function() {
  board = newBoard();
  const restart = document.getElementById("restart");
  const messages = document.querySelector(".messages");
  messages.innerHTML = "<div class='start'>Start New Game</div>";
  const start = document.querySelector(".start");

  start.addEventListener("click", function(board) {
    newGame(board);
  });

  restart.addEventListener("click", function(board) {
    resetAllCells();
    newGame(board);
  });
});
