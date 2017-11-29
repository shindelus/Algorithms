// form linked lists for every depth of a tree

let listOfDepths = (root) => {
  let levels = {};
  let recurse = (node, currLevel) => {
    if (levels[currLevel]) {
      levels[currLevel].push(node.value);
    } else {
      levels[currLevel] = [node.value];
    }
    if (node.left) { recurse(node.left, currLevel + 1); }
    if (node.right) { recurse(node.right, currLevel + 1); }
  }
  recurse(root, 1);
  let LLs = [];
  for (let key in levels) {
    let valArr = levels[key];
    let LL;
    let prevL;
    for (let i = 0; i < valArr.length; i++) {
      if (!LL) {
        LL = {
          value: valArr[i]
        };
        prevL = LL;
      } else {
        prevL.next = {
          value: valArr[i]
        }
        prevL = prevL.next;
      }
    }
    LLs.push(LL);
  }
  return LLs;
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

console.log(listOfDepths(t))