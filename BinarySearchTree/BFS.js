// class BTNode {
//     constructor(key) {
//         this.key = key
//         this.left = null
//         this.right = null
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null
//     }

const BreadthFirstTraversal = (root) => {
    const values = []
    const queue = [ root ]

    if(root === null){
        return values
    }

    while(queue.length > 0){
        const node = queue.shift() // point of optimization
        values.push(node.key)

        if(node.left !== null){
            queue.push(node.left)
        }
        if(node.right !== null){
            queue.push(node.right)
        }
    }
    return values
}