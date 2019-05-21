/**
 * Builds matrix of zeros representing a new board
 * @returns Array
 */
function newBoard() {
  const matrix = [];
  const height = 6;
  const width = 7;

  for (let y = 0; y < height; y++) {
    matrix[y] = [];
    for (var x = 0; x < width; x++) {
      matrix[y][x] = 0;
    }
  }
  return matrix;
}

console.log(newBoard());
