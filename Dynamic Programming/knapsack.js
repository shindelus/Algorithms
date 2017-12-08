// you are given a group of items with weights and values and a limit of a total weight.  Figure out how to find the highest value that will fit in the sack.

let knapsack = (w, v, t) => {
  let mat = new Array(w.length);
  for (let k = 0; k < mat.length; k++) {
    mat[k] = new Array(t + 1);
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (j === 0 ) {
        mat[i][j] = 0;
      } else if (j < w[i]) {
        if (i === 0) { mat[i][j] = 0; }
        else {
          mat[i][j] = mat[i - 1][j];
        }
      } else {
        let num = Math.floor(j/w[i]);
        if (i === 0) {
          mat[i][j] = num*v[i];
        } else if (j < num * w[i]) {
          mat[i][j] = Math.max(num*v[i], mat[i - 1][j]);
        } else {
          mat[i][j] = Math.max((num*v[i] + mat[i - 1][j - (num * w[i])]), mat[i - 1][j]);
        }
      }
    }
  }
  console.log(mat)
  return mat[w.length - 1][t];
}

console.log(knapsack([1,5,8],[1,6,9], 22))