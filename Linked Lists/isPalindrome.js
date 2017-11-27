// Check if a Linked List is a Palindrome

let isPalindrome = (head) => {
  let letters = [];
  let curr = head
  while (curr !== null) {
    letters.push(curr.value);
    curr = curr.next;
  }
  console.log(letters)
  return letters.join('') === letters.reverse().join('');
}

let l = {value: 'a'}
l.next = {value: 'f'}
l.next.next = {value: 'd'}
l.next.next.next = {value: 'r'}
l.next.next.next.next = {value: 'd'}
l.next.next.next.next.next = {value: 'f'}
l.next.next.next.next.next.next = {
  value: 'a',
  next: null
}

console.log(isPalindrome(l));