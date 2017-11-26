
let hasUniqueChars = (str) => {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    } else {
      hash[str[i]] = true;
    }
  }
  return true;
}

console.log(hasUniqueChars('abcdefghii'))