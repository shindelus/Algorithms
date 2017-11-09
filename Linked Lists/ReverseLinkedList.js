// REVERSING A LINKED LIST

let LLReverse = (head) => {
  let current = head;
  let prev = null;
  let next;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}

let l = {value: 123}
l.next = {value: 456}
l.next.next = {value: 789}
l.next.next.next = {
  value: 101112,
  next: null
}

console.log(JSON.stringify(LLReverse(l)));