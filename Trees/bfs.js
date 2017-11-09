// BREADTH FIRST SEARCH / BREADTH FIRST TRAVERSAL


let BFSearch = (tree, value) => {
  let queue = [tree];
  while (queue.length > 0) {
    let tempNode = queue.shift();
    if (tempNode.value === value) {
      return tempNode;
    }
    if (tempNode.left) {
      queue.push(tempNode.left);
    }
    if (tempNode.right) {
      queue.push(tempNode.right);
    }
  }
  return null;
}


let BFTraversal = (tree) => {
  let queue = [tree];
  let values = [];
  while (queue.length > 0) {
    let tempNode = queue.shift();
    values.push(tempNode.value);
    if (tempNode.left) {
      queue.push(tempNode.left);
    }
    if (tempNode.right) {
      queue.push(tempNode.right);
    }
  }
  return values;
}


let t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}

console.log(BFSearch(t, -3))

console.log(BFTraversal(t))
