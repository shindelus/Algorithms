

let bubbleSort = (array) => {
  let sorted;
  let temp;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return array;
}

console.log(bubbleSort([4,2,6,3,9,1]))