// Delete middle node of Linked List

let deleteMiddle = (node) => {
  let midNode;
  let recurse = (currentNode, nodeCount) => {
    if (currentNode.next === null) {
      return [nodeCount, 1];
    }
    let nums = recurse(currentNode.next, nodeCount + 1)
    if (Math.floor(nums[0] / nums[1]) === 2) {
      midNode = currentNode;
    };
    return [nums[0], nums[1] + 1];
  }
  recurse(node, 1);
  return midNode;
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

console.log(deleteMiddle(l))