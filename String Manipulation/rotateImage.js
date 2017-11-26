// rotate N X N matrix 90% clockwise

let rotateImage = (matrix) => {
  let n = matrix.length;
  for (let layer = 0; layer < n/2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  return matrix;
}

let a = [[0,0,0,1], [3,6,7,1], [3,9,8,1], [3,2,2,2]]
let b = rotateImage(a);
console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);