'use strict';

module.exports = (graph, startVertex, goalVertex) => {
  const queue = []; // make this a real queue
  const visitedVertices = new Set();

  const paths = new Map();

  queue.unshift(startVertex);
  visitedVertices.add(startVertex);

  while (queue.length > 0){
    // dequeue
    // check if we're at the goal
    // loop over neighbors
    const currentVertex = queue.pop();

    if (currentVertex === goalVertex) {
      return paths;
    }

    for (let neighbor of graph.getNeighbors(currentVertex)) {
      if (visitedVertices.has(neighbor.vertex)){
        continue;
      } else {
        visitedVertices.add(neighbor.vertex);
      }

      paths.set(neighbor.vertex, currentVertex);
      queue.unshift(neighbor.vertex);
    }
  }

  return null;
};
