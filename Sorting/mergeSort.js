
let merge = (left, right) => {
  let combined = [];
  var iR = 0;
  var iL = 0;
  while (combined.length < left.length + right.length) {
    if (left[iL] <= right[iR] || iR === right.length) {
      combined.push(left[iL]);
      iL++;
    } else {
      combined.push(right[iR]);
      iR++;
    }
  }
  return combined;
}


let mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length/2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1,3,52,4,8,2,5,0,24]))