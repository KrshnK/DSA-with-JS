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

const depthFirstTraversal = (root) => {
    const values = []
    const Stack = [ root ]

    if(root === null){
        return values
    }

    while(Stack.length > 0){
        const node = Stack.pop()
        values.push(node.key)

        if(node.right !== null){
            Stack.push(node.right)
        }
        if(node.left !== null){
            Stack.push(node.left)
        }
    }
    return values
}

// recursive method

const recursiveDfs = (root) =>{
    if(root === null){
        return
    }

    const leftValues = recursiveDfs(root.left)
    const rightValues = recursiveDfs(root.right)

    // return [root,leftValues,rightValues] 
    // [ a ,[ b, c, d], [ e, f]]

    return [root,...leftValues,...rightValues]
}