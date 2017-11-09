// DEPTH FIRST SEARCH

let DFSearch = (tree, value) => {
  let foundNode = null;
  let recurse = (node) => {
    if (node.value === value) {
      foundNode = node;
      return;
    }
    if (node.left) {
      recurse(node.left);
    }
    if (node.right) {
      recurse(node.right);
    }
  }
  recurse(tree)
  return foundNode;
}

let DFTraversal = (tree) => {
  let values = [];
  let recurse = (node) => {
    values.push(node.value);
    if (node.left) {
      recurse(node.left);
    }
    if (node.left) {
      recurse(node.left);
    }
  }
  recurse(tree);
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


console.log(DFSearch(t, -3));

console.log(DFTraversal(t));