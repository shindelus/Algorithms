// construct a minimal tree from a sorted array

let minimalTree = (arr) => {
  if (arr.length === 1) {
    return {
      value: arr[0],
      left: null,
      right: null
    }
  } else if (arr.length === 2) {
    return {
      value: arr[0],
      right: {
        value: arr[1],
        left: null,
        right: null
      },
      left: null
    }
  } else {
    let midI = Math.floor(arr.length/2);
    let mid = {
      value: arr[midI],
      left: minimalTree(arr.slice(0, midI)),
      right: minimalTree(arr.slice(midI + 1, arr.length))
    };
    return mid;
  }
}

let a = minimalTree([1,2,3,4,5,6,7,8,9]);

console.log(a)