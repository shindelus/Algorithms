// Write a function to show all possible shuffles of an array input

let allPossibleShuffles = (options) => {
  let possibilities = [];
  let recurse = (current, currentOptions) => {
    if (currentOptions.length === 0) {
      possibilities.push(current);
      return;
    }
    for (let i = 0; i < currentOptions.length; i++) {
      let play = currentOptions[i];
      recurse(current.concat(play), currentOptions.slice(0,i).concat(currentOptions.slice(i + 1,currentOptions.length)));
    }

  }
  recurse([], options.slice());
  return possibilities;
}

let options = ['a', 'b', 'c', 'd'];
console.log(allPossibleShuffles(options));