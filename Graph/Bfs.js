const graph = require("./graph.js");

function breadthFS(graph, start) {
    const queue = [start];
    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return Array.from(visited);
}

console.log(breadthFS(graph, "a"));
