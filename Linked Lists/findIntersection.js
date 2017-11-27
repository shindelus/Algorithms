// return an intersection node between 2 linked lists, if one exists

let findIntersection = (head1, head2) => {
  let nodes = [];
  let curr1 = head1;
  while (curr1 !== null) {
    nodes.push(curr1);
    curr1 = curr1.next;
  }
  let curr2 = head2;
  while (curr2 !== null) {
    if (nodes.includes(curr2)) {
      return curr2;
    }
    curr2 = curr2.next;
  }
  return null;
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

let m = {value: 12};
m.next = {value: 543};
m.next.next = l.next.next.next;

console.log(findIntersection(l, m))