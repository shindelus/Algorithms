// Remove Kth to the last element in a Linked List


//Recursive
let removeKthElement = (head, k) => {
  let kth;
  let recurse = (node) => {
    if (node.next === null) {
      return 1;
    }
    counter = recurse(node.next);
    counter += 1;
    if (counter === k) {
      kth = node;
    }
    return counter;
  }
  recurse(head);
  return kth;
}

let l = {value: 123}
l.next = {value: 456}
l.next.next = {value: 789}
l.next.next.next = {value: 391}
l.next.next.next.next = {value: 659}
l.next.next.next.next.next = {value: 403}
l.next.next.next.next.next.next = {
  value: 101,
  next: null
}

console.log(JSON.stringify(removeKthElement(l, 3)))