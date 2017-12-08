let binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;
  let mid = Math.floor((max - min)/2);
  while (max - min > 1) {
    if (array[mid] === target) {
      return mid;
    } else if (target > array[mid]) {
      min = mid;
      mid = Math.floor(((max - min)/2) + min);
    } else if (target < array[mid]) {
      max = mid;
      mid = Math.floor((max - min)/2);
    }
  }
  return 'nuthin';
}

console.log(binarySearch([1,3,5,7,9], 4))
