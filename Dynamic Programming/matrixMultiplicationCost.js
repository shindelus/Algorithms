// Determine the best order to multiple matrices, based on lowest cost.

let matrixMult = (array) => {
  //assumed the array items are in the form of [# of rows, # of columns]
  let mat = new Array(array.length);
  for (let m = 0; m < mat.length; m++) {
    mat[m] = new Array(array.length);
  }
  for (let n = 0; n < mat.length; n++) {
    mat[n][n] = 0;
  }
  for (var l = 2; l <= array.length; l++) {
    for (var i = 0; i <= array.length - l; i++) {
      var j = i + l - 1;
      mat[i][j] = Number.MAX_VALUE;
      var temp;
      for (var k = i; k < j; k++) {
        temp = mat[i][k] + mat[k + 1][j] + (array[i][0] * array[k][1] * array[j][1]);
        if (temp < mat[i][j]) {
          mat[i][j] = temp;
        }
      }
    }
  }
  return mat[0][array.length - 1];
}

console.log(matrixMult([[3,2],[2,4],[4,3],[3,5]]))