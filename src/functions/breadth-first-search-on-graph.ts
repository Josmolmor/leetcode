class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map<number, number[]>();
    }

    addVertex(vertex: number) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: number, vertex2: number) {
        this.adjacencyList.get(vertex1)?.push(vertex2);
    }

    bfs(startingNode: number) {
        let visited = new Set();
        let queue = [startingNode];
        let result = [];

        visited.add(startingNode);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (!currentNode) continue;

            result.push(currentNode);

            const neighbors = this.adjacencyList.get(currentNode);

            if(!neighbors?.length) continue;

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

const bfsResult = graph.bfs(1);
console.log(bfsResult); // Output: [1, 2, 3, 4]
