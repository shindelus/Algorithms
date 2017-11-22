let makeMatrix = (n) => {
  let matrix = []
  for (let i = 0; i < n; i++) {
    let tempArr = new Array(n);
    for (let j = 0; j < tempArr.length; j++) {
      tempArr[j] = 1;
    }
    matrix.push(tempArr);
  }
  return matrix;
}

let randMatrix = makeMatrix(7);

randMatrix[0][0] = 0;
randMatrix[3][1] = 0;
randMatrix[1][3] = 0;
randMatrix[0][2] = 0;
randMatrix[4][5] = 0;
randMatrix[2][5] = 0;
randMatrix[5][1] = 0;
randMatrix[6][6] = 0;
randMatrix[3][3] = 0;
randMatrix[5][4] = 0;

console.log(randMatrix)


let adjacency = {
  '00': ['02', '30'],
  '30': ['33', '51'],
  '02': ['13'],
  '13': ['33', '25'],
  '33': ['45'],
  '25': ['45'],
  '51': ['54'],
  '54': ['66'],
  '45': ['66']
}

let reconstructPath = (cameFrom, current) => {
  let path = [current];
  while (cameFrom[current] !== '00') {
    current = cameFrom[current];
    path.push(current);
  }
  return path;
}

let Astar = (adjacency) => {
  let closedSet = [];
  let openSet = ['00'];
  let cameFrom = {};
  let current;
  let gScore = Number.MAX_VALUE;
  let fScore = Number.MAX_VALUE;
  let goal = [6, 6];
  while (openSet.length > 0) {
    current = openSet.shift();
    if (current === '66') {
      return reconstructPath(cameFrom, current);
    }
    closedSet.push(current);
    let bestNeighbor;
    adjacency[current].forEach((node) => {
      if (closedSet.includes(node)) {
        next;
      }
      let from = current.split('').map((c) => { return Number(c)});
      let to = node.split('').map((d) => { return Number(d)});
      let currentG = Math.pow((Math.pow(from[0] - to[0], 2) + Math.pow(from[1] - to[1], 2)), 0.5);
      let currentH = Math.pow((Math.pow(goal[0] - to[0], 2) + Math.pow(goal[1] - to[1], 2)), 0.5);
      let currentF = currentG + currentH;
      if (currentF < fScore) {
        fScore = currentF;
        bestNeighbor = node;
      }
    })
    openSet.push(bestNeighbor);
    cameFrom[bestNeighbor] = current;
    fScore = Number.MAX_VALUE;
  }
  return 'failed';
}

console.log(Astar(adjacency))






















