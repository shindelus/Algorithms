// REMOVE A NODE WITHOUT ACCESS TO HEAD

let removeNode = (node) => {
  node.value = node.next.value;
  node.next = node.next.next;
  return node
}


let l = {value: 123}
l.next = {value: 456}
l.next.next = {value: 789}
l.next.next.next = {
  value: 101112,
  next: null
}

console.log(removeNode(l.next.next))
console.log(l);