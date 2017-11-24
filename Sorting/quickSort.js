

let quickSort = (array) => {
  if (array.length <= 1) { return array }
  let pivot = array[array.length - 1];
  let smaller = [];
  let bigger = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      smaller.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  }
  return quickSort(smaller).concat(pivot).concat(quickSort(bigger));
}

console.log(quickSort([1,3,6,9,3,7,4,10,2]))