// Assuming graph.js exports an object representing your graph
const graph = require('./graph.js');

// Depth First Search (DFS) is a graph traversal algorithm where we traverse the graph recursively, visiting each vertex and its neighbors before moving on to the next vertex.

// Iterative
function depthFSI(graph, start) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visited.has(node)) {
            visited.add(node);
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }

    return Array.from(visited);
}

console.log(depthFSI(graph, 'a'));

// Recursive

function depthFSR(graph, start, visited = new Set()) {
    if (!visited.has(start)) {
        visited.add(start)
        for (const neighbor of graph[start]) {
            depthFSR(graph, neighbor, visited)
        }
    }
    return Array.from(visited)

}

console.log(depthFSR(graph, 'a'));