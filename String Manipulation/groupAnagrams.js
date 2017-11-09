// GROUP ANAGRAMS IN SEPARATE ARRAYS, GIVEN AN ARRAY OF STRINGS

let groupAnagrams = (array) => {
  let anagramsObj = {};
  let anagrams = [];
  array.forEach((str) => {
    let key = str.split('').sort().join('');
    if (anagramsObj[key]) {
      anagramsObj[key].push(str);
    } else {
      anagramsObj[key] = [str];
    }
  });
  for (key in anagramsObj) {
    anagrams.push(anagramsObj[key]);
  }
  return anagrams;
}

console.log(groupAnagrams(['dad','far','raf','afr','add', 'dda']))