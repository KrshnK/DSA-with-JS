const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'e'],
    e: ['f'],
    f: ['e']
}

module.exports = graph;