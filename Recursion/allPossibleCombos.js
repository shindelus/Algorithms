let allPossibleCombos = (options) => {
  let possibilities = [];
  let recurse = (current, currentOptions) => {
    if (current.length > 0) { possibilities.push(current.join('')); }
    if (currentOptions.length === 0) {
      return;
    }
    for (let i = 0; i < currentOptions.length; i++) {
      let play = currentOptions[i];
      recurse(current.concat(play), currentOptions.slice(0,i).concat(currentOptions.slice(i + 1,currentOptions.length)));
    }

  }
  recurse([], options.split(''));
  return possibilities;
}

let options = 'abcd';
console.log(allPossibleCombos(options));