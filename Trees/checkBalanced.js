// Write a function to check if binary tree is balanced

let checkBalanced = (root) => {
  let balanced = true;
  let currDepth;
  let higher;
  let recurse = (node, depth) => {
    if (!node.left && !node.right) {
      if (!currDepth) {
        currDepth = depth;
      } else {
        if (depth < currDepth - 1 || depth > currDepth + 1) {
          balanced = false;
          return;
        } else {
          if (higher === undefined) {
            if (depth > currDepth) {
              higher = true;
            } else {
              higher = false;
            }
          } else if (higher && depth < currDepth) {
            balanced = false;
            return;
          } else {
            return;
          }
        }
      }
    }
    if (node.left) { recurse(node.left, depth + 1); }
    if (node.right) { recurse(node.right, depth + 1); }
  }
  recurse(root, 1);
  return balanced;
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
console.log(checkBalanced(t))
