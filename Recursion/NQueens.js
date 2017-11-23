// write a function that returns a solution to N queens on an N X N board where the horizontal, vertical, and diagonals from each queen do not touch the other queens.

let NQueens = (n) => {
  let pos;
  let nextRow = (row, positions) => {
    if (row === n) {
      pos = positions;
      return true;
    }
    while(row < n) {
      for (let col = 0; col < n; col++) {
        let safe = true;
        let diag1 = row + col;
        let diag2 = row - col;
        for (let i = 0; i < positions.length; i++) {
          console.log(row, col, positions);
          if (diag1 === positions[i][0] + positions[i][1] || diag2 === positions[i][0] - positions[i][1] || col === positions[i][1]) {
            safe = false;
            break;
          }
        }
        if (safe) {
          positions.push([row, col]);
          if (nextRow(row + 1, positions)) {
            return true;
          }
        }
      }
      positions.pop();
      return false
    }
  }
  if (nextRow(0, [])) {
    return pos;
  } else {
    return 'no solution';
  }
}

console.log(NQueens(5))
