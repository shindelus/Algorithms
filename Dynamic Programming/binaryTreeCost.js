let binTreeCost = (array) => {

  let mat = new Array(array.length);
  for (let m = 0; m < mat.length; m++) {
    mat[m] = new Array(array.length);
  }
  for (let n = 0; n < mat.length; n++) {
    mat[n][n] = array[n][1];
  }
  let base;
  for (var l = 2; l <= array.length; l++) {
    for (var i = 0; i <= array.length - l; i++) {
      var j = i + l - 1;
      mat[i][j] = Number.MAX_VALUE;
      var temp;
      base = 0;
      for (let a = i; a <= j; a++) {
        base += array[a][1];
      }
      for (var k = i; k <= j; k++) {
        let nodeCosts = (k === i ? 0 : mat[i][k - 1]) + (k === j ? 0 : mat[k + 1][j]) ;
        temp = base + nodeCosts;
        console.log(i, j, base, nodeCosts)
        if (temp < mat[i][j]) {
          mat[i][j] = temp;
        }
      }
    }
  }
  console.log(mat)
  return mat[0][array.length - 1];
}

console.log(binTreeCost([[0,6],[1,4],[2,10]]))