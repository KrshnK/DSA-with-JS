/* 
Write a function minimumIsland , that takes in a grid containing 0s and 1s. 0 represent water and 1 represent land. The function should return the size of the smallest island. An island is a vertically or horizantally connected region of land.
*/

function minIslandSize(grid) {
    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let smallestSize = Infinity

    const exploreSize = (r, c) => {
        const pos = r + ',' + c
        if (r < 0 || r >= rows || c < 0 || c >= cols ||
            grid[r][c] === 0 || visited.has(pos)) {
            return
        }
        visited.add(pos)
        let size = 1
        size += exploreSize(r + 1, c)
        size += exploreSize(r - 1, c)
        size += exploreSize(r, c + 1)
        size += exploreSize(r, c - 1)

        return size
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1 && !visited.has(r + ',' + c)) {
                const size = exploreSize(r, c)
                if (size < smallestSize) {
                    smallestSize = size
                }
            }
        }
    }
    return smallestSize
}