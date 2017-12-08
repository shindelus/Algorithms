// given a pre-order and in-order traversal arrays, restore a binary tree.

let restoreBT = (inorder, preorder) => {
  let preIndex = 0;
  let recurse = (start, finish) => {
    if (start > finish) {
      return null;
    }
    let newVal = preorder[preIndex];
    preIndex++;
    let newNode = {
      value: newVal,
      left: null,
      right: null
    }
    if (start === finish) {
      return newNode;
    }
    let inIndex = search(newVal, start, finish, inorder);
    newNode.left = recurse(start, inIndex - 1);
    newNode.right = recurse(inIndex + 1, finish);
    return newNode;
  }
  return recurse(0, inorder.length - 1);
}

let search = (target, start, finish, inorder) => {
  for (let i = start; i <= finish; i++) {
    if (inorder[i] === target) {
      return i;
    }
  }
}

let a = restoreBT([4,2,3,1,5,8,7,6], [1,2,4,3,8,5,6,7]);

console.log(a.right)


