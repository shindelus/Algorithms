// Write a function to output every possible combination of limited amount of rock paper scissors games.

let rockPaperScissors = (n) => {
  let possibilities = [];
  let options = ['rock', 'paper', 'scissors'];
  let recurse = (current, turnsLeft) => {
    if (turnsLeft < 1) {
      possibilities.push(current);
      return;
    }
    for (let i = 0; i < options.length; i++) {
      let play = options[i];
      recurse(current.concat(play), turnsLeft - 1);
    }

  }
  recurse([], n);
  return possibilities;
}

console.log(rockPaperScissors(4));
