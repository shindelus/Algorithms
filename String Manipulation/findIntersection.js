// FIND THE INTERSECTION OF 2 ARRAYS OF NUMBERS

let findIntersection = (arr1, arr2) => {
  let arr1Obj = {};
  let intersection = [];
  arr1.forEach((num) => {
    arr1Obj[num] = num;
  });
  arr2.forEach((number) => {
    if (arr1Obj[number]) {
      intersection.push(number);
    }
  });
  return intersection;
}

console.log(findIntersection([1,2,3,4,5,6],[4,5,6,7,8,9]))