// compress duplicates, eg: 'aaabbccc' => 'a3b2c3'

let stringComp = (str) => {
  let shortenedStr = '';
  let counter = 0;
  let currentL;
  for (let i = 0; i < str.length; i++) {
    if (!currentL || str[i] !== currentL) {
      if (!currentL) {
        counter = 1;
        currentL = str[i];
      } else {
        shortenedStr += currentL + counter.toString();
        counter = 1;
        currentL = str[i];
      }
    } else {
      counter++;
    }
    if (i === str.length - 1) {
      shortenedStr += currentL + counter.toString();
    }
  }
  return shortenedStr;
}

console.log(stringComp('aaabbcccddddeeffffffffffffffffff'))

