// Breadth

const treeSumBfs = (root) =>{
    let sum = 0;
    let queue = [ root ]

    if (root === null) return 
    while(queue.length > 0){
        const node = queue.shift()
        sum += node.key

        if(node.left !== null){
            queue.push(node.left)
        }
        if(node.right !== null){
            queue.push(node.right)
        }
    }
    return sum
}

// Depth

const treeSum = (root) =>{
    if(root === null){
        return
    }

    return root.key + treeSum(root.left) + treeSum(root.right)
}