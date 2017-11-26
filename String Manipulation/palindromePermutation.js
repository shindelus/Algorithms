// return if the string is a permutation of palindrome.  eg: 'dad' => true, 'bababa' => false

let palindromePermuation = (str) => {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]] = false;
    } else {
      hash[str[i]] = true;
    }
  }
  let count = 0;
  for (let key in hash) {
    if (hash[key]) {
      count++;
    }
  }
  return count === 0 || count === 1;
}

console.log(palindromePermuation('aaabbb'))