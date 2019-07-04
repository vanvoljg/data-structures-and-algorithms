'use strict';

const PriorityQueue = require('js-priority-queue');

module.exports = (graph, startVertex, goalVertex) => {
  const priorityQueue = new PriorityQueue({
    comparator: (a, b) => a.priority - b.priority,
  });

  const visitedVertices = new Set();
  const paths = new Map();
  const shortestPathSoFar = new Map();

  priorityQueue.queue({
    vertex: startVertex,
    priority: 0,
  });

  shortestPathSoFar.set(startVertex, 0);

  while (priorityQueue.length > 0) {
    const currentVertex = priorityQueue.dequeue().vertex;

    if (visitedVertices.has(currentVertex)) {
      continue;
    }

    visitedVertices.add(currentVertex);

    if (currentVertex === goalVertex) {
      return paths;
    }

    const neighbors = graph.getNeighbors(currentVertex);

    for (const neighbor of neighbors) {
      const { weight, vertex: nextVertex } = neighbor;

      if (visitedVertices.has(nextVertex)) {
        continue;
      }

      const nextWeight = shortestPathSoFar.get(nextVertex);
      const pathWeight = nextWeight ? nextWeight + weight : weight;
      if (
        !shortestPathSoFar.has(neighbor) ||
        pathWeight < shortestPathSoFar.get(nextVertex)
      ) {
        shortestPathSoFar.set(nextVertex, pathWeight);
        paths.set(nextVertex, currentVertex);

        priorityQueue.queue({
          vertex: nextVertex,
          priority: shortestPathSoFar.get(nextVertex),
        });
      }
    }
  }

  return null;
};
