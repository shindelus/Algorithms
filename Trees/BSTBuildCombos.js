// a BST was built using only an array in order.  Print all possibilities the array could be the build the given BST.

let BSTCombos = (root) => {
  let levels = {};
  let levelShuffles = {};
  let combos = [];
  let arr;
  let recurseLevels = (node, level) => {
    if (levels[level]) {
      levels[level].push(node.value);
    } else {
      levels[level] = [node.value]
    }
    if (!node.left && !node.right) {
      return;
    }
    if (node.left) { recurseLevels(node.left, level + 1); }
    if (node.right) { recurseLevels(node.right, level + 1); }
  }
  recurseLevels(root, 1);

  let recurseCombo = (current, currentOptions, level) => {
    if (currentOptions.length === 0) {
      if (levelShuffles[level]) {
        levelShuffles[level].push(current);
      } else {
        levelShuffles[level] = [current];
      }
      return;
    }
    for (let i = 0; i < currentOptions.length; i++) {
      let play = currentOptions[i];
      recurseCombo(current.concat(play), currentOptions.slice(0,i).concat(currentOptions.slice(i + 1,currentOptions.length)), level);
    }
  }
  for (let key in levels) {
    recurseCombo([], levels[key], key);
  }

  let recurseCombos = (currCombo, level) => {
    if (!levels[level]) {
      combos.push(currCombo);
      return;
    }
    for (let i = 0; i < levelShuffles[level].length; i++) {
      recurseCombos(currCombo.concat(levelShuffles[level][i]), level + 1);
    }
  }
  recurseCombos([], 1);
  return combos;
}

console.log(BSTCombos({
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
}))