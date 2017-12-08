// given a matrix, starting from the top right, return how many paths a robot can take to get to the bottom left by only moving right and down.  Avoid values of one in the path.

let path = (mat, i, j) => {
  i = i || 0;
  j = j || 0;
  if (i === mat.length - 1 && j === mat.length - 1) {
    return 1;
  }
  if (i >= mat.length - 1) {
    return path(mat, i, j + 1);
  }
  if (j >= mat.length - 1) {
    return path(mat, i + 1, j);
  }
  if (mat[i + 1][j] === 1 && mat[i][j + 1] === 1) { return 0; }
  if (mat[i][j + 1] === 1) {
    return path(mat, i + 1, j)
  }
  if (mat[i + 1][j] === 1) {
    return path(mat, i, j + 1)
  }

  return path(mat, i + 1, j) + path(mat, i, j + 1);
}

console.log(path([[0,1,0,0],[0,0,0,1],[0,0,1,0],[0,0,0,0]]))

