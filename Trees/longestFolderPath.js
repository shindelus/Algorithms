function longestPath(fileSystem) {
  let level = 1;
  let currentWord = '';
  let longestLen = 0;
  let parents = {};
  let count;
  for (let i = 0; i < fileSystem.length; i++) {
    if (fileSystem.length === 1) {
      return 0;
    }
    let firstTwo = fileSystem.slice(i, i + 1);
    if (firstTwo === '\n' || firstTwo === '\r') {
      parents[level] = currentWord;
      if (currentWord.includes('.')) {
        count = currentWord.length + 1;
        for (let key in parents) {
          if (parents[key] === currentWord) {
            break;
          } else {
            count += parents[key].length;
            count++;
          }
        }
        if (count > longestLen) {
          longestLen = count;
        }
      }
      currentWord = '';
      level = 1;
      i++;
      while (fileSystem.slice(i, i + 1) === '\t') {
        level++;
        i++;
      }
      i--;
    } else {
      currentWord += fileSystem[i];
    }
  }
  parents[level] = currentWord;
  if (currentWord.includes('.')) {
    count = currentWord.length + 1;
    for (let key in parents) {
      if (parents[key] === currentWord) {
        break;
      } else {
        count += parents[key].length;
        count++;
      }
    }
    if (count > longestLen) {
      longestLen = count;
    }
  }
  console.log(parents )
  return longestLen ? longestLen - 1 : 0;
}

// console.log(longestPath("user\n\tpictures\n\t\tphoto.png\n\t\tcamera\n\tdocuments\n\t\tlectures\n\t\t\tnotes.txt"))
// console.log(longestPath("user\r\tpictures\r\tdocuments\r\t\tnotes.txt"))
console.log(longestPath("a\r\taa\r\t\taaa\r\t\t\tfile1234567890123.txt\raaaaaaaaaaaaaaaaaaaaa\r\tsth.png"))
console.log(longestPath("a\r\tb\r\t\tc\r\t\t\td\r\t\t\t\te.txt\r\t\t\t\talsdkjf.txt\r\t\tskdjfl.txtlsdkjflsdjflsajdflkjasklfjkasljfklas\r\tlskdjflkajsflj.txt"))