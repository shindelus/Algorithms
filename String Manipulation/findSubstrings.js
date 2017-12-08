// find the longest in a group of substrings that is contained in each string in an array.


// Works, but too slow
// let findSubstrings = (words, parts) => {
//   for (let i = 0; i < words.length; i++) {
//     let included;
//     let w = words[i];
//     let length = 0;
//     for (let j = 0; j < parts.length; j++) {
//       let p = parts[j];
//       if (w.includes(p) && p.length > length) {
//         included = [p];
//         length = p.length;
//       } else if (w.includes(p) && p.length === length) {
//         included.push(p);
//       }
//     }
//     let found;
//     if (included) {
//       for (let k = 0; k < w.length; k++) {
//         for (let l = 0; l < included.length; l++) {
//           if (w.slice(k, k + included[l].length) === included[l]) {
//             words[i] = w.slice(0,k).concat('[').concat(included[l]).concat(']').concat(w.slice(k + included[l].length, w.length));
//             found = true;
//             break;
//           }
//           if (found) { break; }
//         }
//         if (found) { break; }
//       }
//     }
//   }
//   return words;
// }

let findSubstrings = (words, parts) => {
  let trie = {};
  let currNode;
  let currentNode;
  let longestLen = 0;
  let longestPos;
  let final = [];
  trie.root = {
    terminal: false,
    children: {}
  };
  for (let i = 0; i < parts.length; i++) {
    currNode = trie.root;
    for (let j = 0; j < parts[i].length; j++) {
      let l = parts[i][j];
      if (!currNode.children[l]) {
        currNode.children[l] = {
          letter: l,
          terminal: false,
          children: {}
        }
      }
      currNode = currNode.children[l];
    }
    currNode.terminal = true;
  }
  for (let m = 0; m < words.length; m++) {
    let word = words[m];
    longestLen = 0;
    longestPos = undefined;
    for (let start = 0; start < word.length; start++) {
      let currentNode = trie.root;
      let length;
      for (let position = start; position < word.length; position++) {
        let char = word[position];
        if (!currentNode.children[char]) {
          break;
        }
        currentNode = currentNode.children[char];
        length = position - start + 1;
        if (currentNode.terminal && length > longestLen) {
          longestLen = length;
          longestPos = start;
        }
      }
    }
    if (longestLen === 0) {
      final.push(word);
    } else {
      let end = longestLen + longestPos;
      final.push(word.slice(0, longestPos) + '[' + word.slice(longestPos, end) + ']' + word.slice(end));
    }
  }
  return final;
}

// console.log(findSubstrings(['about','damn','time'],['out','amn','ime','ab']))
console.log(findSubstrings(
 ["neuroses",
 "myopic",
 "sufficient",
 "televise",
 "coccidiosis",
 "gules",
 "during",
 "construe",
 "establish",
 "ethyl"
 ],
 [
 "aaaaa",
 "Aaaa",
 "E",
 "z",
 "Zzzzz",
 "a",
 "mel",
 "lon",
 "el",
 "An",
 "ise",
 "d",
 "g",
 "wnoVV",
 "i",
 "IUMc",
 "P",
 "KQ",
 "QfRz",
 "Xyj",
 "yiHS"
 ]))
