

let removeDups = (node) => {
  let values = {};
  current = node;
  while (current.next !== null) {
    if (values[current.value]) {
      current.value = current.next.value;
      current.next = current.next.next;
    } else {
      values[current.value] = true;
      current = current.next;
    }
  }
  console.log(JSON.stringify(values))
  return node;
}

let l = {value: 123}
l.next = {value: 456}
l.next.next = {value: 123}
l.next.next.next = {value: 391}
l.next.next.next.next = {value: 659}
l.next.next.next.next.next = {value: 403}
l.next.next.next.next.next.next = {
  value: 101,
  next: null
}

console.log(JSON.stringify(removeDups(l)));