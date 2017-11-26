

let isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) { return false; }
  let s1 = str1.split('').sort().join('');
  let s2 = str2.split('').sort().join('');
  return s1 === s2;
}

console.log(isPermutation('bcda', 'abcd'))







