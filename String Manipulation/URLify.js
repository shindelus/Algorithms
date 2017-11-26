// // 'jack and jill    ' => 'jack%20and%20jill'

let urlify = (str) => {
  str = str.split('');
  let spaceCount = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === ' ' && str[i + 1] !== ' ') {
      spaceCount++;
    }
  }
  let inSpaces = true;
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] !== ' ') { inSpaces = false; }
    if (!inSpaces) {
      if (str[j] !== ' ') {
        str[j + (spaceCount * 2)] = str[j];
      } else {
        let forwSpace = j + (spaceCount * 2);
        console.log(forwSpace)
        str[forwSpace] = '0';
        str[forwSpace - 1] = '2';
        str[forwSpace - 2] = '%';
        spaceCount--;
      }
    }
  }
  return str.join('');
}

console.log(urlify('me and my mom went to the store              '))

