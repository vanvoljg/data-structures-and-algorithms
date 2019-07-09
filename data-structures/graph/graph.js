'use strict';

module.exports = class Graph {
  constructor() {
    // Adjacency list
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  // Edges have start, end, and weight
  addEdge(startVertex, endVertex, weight = 0) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      throw new Error('_INVALID_VERTEX_');
    }

    const edgeData = {
      vertex: endVertex,
      weight,
    };

    this._adjacencyList.get(startVertex).push(edgeData);
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error('_INVALID_VERTEX_');
    }

    return [...this._adjacencyList.get(vertex)];
  }
};
