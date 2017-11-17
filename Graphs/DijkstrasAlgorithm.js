// Binary Min Heap With Map

class BinaryMinHeap {
  constructor(heap) {
    this.heap = heap || [];
    this.map = {};
  }

  getHeap() {
    return this.heap;
  }

  getMap() {
    return this.map;
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
    // console.log(this.heap[childIndices[1]][0])
    if (!!childIndices[0] && !!childIndices[1] && this.heap[childIndices[0]][0] < this.heap[childIndices[1]][0]) {
      return childIndices[0];
    } else if (!childIndices[0] && !!childIndices[1]) {
      return childIndices[1];
    } else if (!childIndices[1] && !!childIndices[0]) {
      return childIndices[0];
    } else {
      return childIndices[1];
    }
  }

  insert(node) {
    this.heap.push(node);
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1)/2);
    this.map[this.heap[index][1]] = index;
    while(index > 0 && this.heap[index][0] < this.heap[parentIndex][0]) {
      this.swap(index, parentIndex);
      this.map[this.heap[index][1]] = index;
      this.map[this.heap[parentIndex][1]] = parentIndex;
      index = parentIndex;
      parentIndex = Math.floor((index - 1)/2);
    }
  }

  removeRoot() {
    // console.log('heap before removeRoot', this.heap);
    let lastIndex = this.heap.length - 1;
    // swap root and last
    this.swap(lastIndex, 0);

    // change map indices for swapped values
    this.map[this.heap[lastIndex][1]] = lastIndex;
    this.map[this.heap[0][1]] = 0;
    delete this.map[this.heap[lastIndex][1]]
    let originalRoot = this.heap.pop();
    let parentIndex = 0;
    let lesserChildIndex = this.getLesserChild(0);
    // console.log('lesserChildIndex', lesserChildIndex)

    // move new root to correct location by comparing to children and swapping
    while(lesserChildIndex && this.heap[lesserChildIndex][0] < this.heap[parentIndex][0]) {
      // swap
      this.swap(lesserChildIndex, parentIndex);

      // change map indices for swapped values
      this.map[this.heap[lesserChildIndex][1]] = lesserChildIndex;
      this.map[this.heap[parentIndex][1]] = parentIndex;

      parentIndex = lesserChildIndex;
      lesserChildIndex = this.getLesserChild(parentIndex);
    }
    // console.log('heap after removeRoot', this.heap);
    return originalRoot;
  }

  decrease(index, newValue) {
    // console.log('heap before decrease', this.heap);
    this.heap[index][0] = newValue;
    let parentIndex = Math.floor((index - 1)/2);
    if (parentIndex < 0) { return; }
    while(index > 0 && this.heap[index][0] < this.heap[parentIndex][0]) {
      this.swap(index, parentIndex);
      this.map[this.heap[index][1]] = index;
      this.map[this.heap[parentIndex][1]] = parentIndex;
      index = parentIndex;
      parentIndex = Math.floor((index - 1)/2);
    }
    // console.log('heap after decrease', this.heap);

  }
}


class Graph {
  constructor() {
    this.distMap = {};
    this.parentMap = {};
    this.binaryMinHeap = new BinaryMinHeap();
    this.vertices = ['a','b','c','d','e','f'];
    this.edgeLookup = {
      'a': ['b','d','e'],
      'b': ['a','c'],
      'c': ['b','d'],
      'd': ['c','a','f'],
      'e': ['a','f'],
      'f': ['d','e']
    }
    this.edges = {
      'ab':5,
      'ad':9,
      'ae':2,
      'ba':5,
      'bc':2,
      'cb':2,
      'cd':3,
      'dc':3,
      'da':9,
      'df':2,
      'ea':2,
      'ef':3,
      'fd':2,
      'fe':3
    }

    this.vertices.forEach((node) => {
      this.binaryMinHeap.insert([Number.MAX_VALUE, node]);
    })
  }


  getShortestPath(start) {
    this.distMap[start] = 0;

    let startIndex = this.binaryMinHeap.getMap()[start];
    this.binaryMinHeap.decrease(startIndex, 0);

    let current = this.binaryMinHeap.removeRoot()[1];
    let neighborIndex,
        neighbors,
        newLow,
        index,
        removed;
    while (this.binaryMinHeap.getHeap().length > 0) {

      neighbors = this.edgeLookup[current];
      neighbors.forEach((neighbor) => {
        // console.log('current', current);
        // console.log('neighbor', neighbor);
        let heapMap = this.binaryMinHeap.getMap();
        let heap = this.binaryMinHeap.getHeap();
        if (heapMap.hasOwnProperty(neighbor)) {
          newLow = Math.min(this.distMap[current] + this.edges[current + neighbor], heap[heapMap[neighbor]][0]);
          index = this.binaryMinHeap.getMap()[neighbor];
          this.binaryMinHeap.decrease(index, newLow);
          // console.log('newLow', newLow, 'index', index)
          // console.log('distMap', this.distMap);
          // console.log('heap', heap);
          // console.log('heap map', heapMap);
          // console.log('-------------------')
        }
      })
      removed = this.binaryMinHeap.removeRoot();
      current = removed[1];
      this.distMap[current] = removed[0];

      // console.log('new current', current);
      // console.log('----------------------------')
    }
    return this.distMap['d'];
  }

}


let dijkstra = new Graph();
console.log(dijkstra.getShortestPath('a'))






























