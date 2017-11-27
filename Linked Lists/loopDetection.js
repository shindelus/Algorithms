// detect if a linked list has a loop

let detectLoop = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

let l = {value: 123}
l.next = {value: 456}
l.next.next = {value: 789}
l.next.next.next = {value: 391}
l.next.next.next.next = l;
// l.next.next.next.next = {value: 659}
// l.next.next.next.next.next = {value: 403}
// l.next.next.next.next.next.next = {
//   value: 101,
//   next: null
// }

console.log(detectLoop(l))