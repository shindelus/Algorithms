class BinaryMinHeap {
  constructor() {
    this.heap = [];
  }

  getHeap() {
    return this.heap;
  }

  swap(index, parentIndex) {
    let temp = this.heap[index];
    this.heap[index] = this.heap[parentIndex];
    this.heap[parentIndex] = temp;
  }

  getLesserChild(parentIndex) {
    let childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter((index)=> {
      return index < this.heap.length;
    });
    if (this.heap[childIndices[0]] < this.heap[childIndices[1]]) {
      return childIndices[0];
    } else {
      return childIndices[1];
    }
  }

  insert(node) {
    this.heap.push(node);
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1)/2);
    while(index > 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1)/2);
    }
  }

  removeRoot() {
    this.swap(this.heap.length - 1, 0);
    let originalRoot = this.heap.pop();
    let parentIndex = 0;
    let lesserChildIndex = this.getLesserChild(0);
    while(lesserChildIndex && this.heap[lesserChildIndex] < this.heap[parentIndex]) {
      this.swap(lesserChildIndex, parentIndex);
      parentIndex = lesserChildIndex;
      lesserChildIndex = this.getLesserChild(parentIndex);
    }
    return originalRoot;
  }
}

var binaryMinHeap = new BinaryMinHeap();
binaryMinHeap.insert(4);
binaryMinHeap.insert(5);
binaryMinHeap.insert(9);
binaryMinHeap.insert(8);
binaryMinHeap.insert(1);
binaryMinHeap.insert(0);
binaryMinHeap.removeRoot();

let heap = binaryMinHeap.getHeap();
console.log(heap);
console.log(heap[0] < heap[1]);
console.log(heap[0] < heap[2]);
console.log(heap[1] < heap[3]);
console.log(heap[1] < heap[4]);

binaryMinHeap.insert(3);

let heap2 = binaryMinHeap.getHeap();
console.log(heap2);
console.log(heap2[0] < heap2[1]);
console.log(heap2[0] < heap2[2]);
console.log(heap2[1] < heap2[3]);
console.log(heap2[1] < heap2[4]);