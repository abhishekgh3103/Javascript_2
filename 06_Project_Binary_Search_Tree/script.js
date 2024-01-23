const Node = (data) => {
    return{
        data,
        left : null,
        right : null,
    };
}

const Tree = (data) => {
    return {
        root : buildTree(data)
    };
}

const buildTree = (data) => {
    const sortedData = [...new Set(data)].sort((a, b) => a-b);
    const balancedBST = (start, end) =>{
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const newNode = Node(sortedData[mid]);

        newNode.left= (balancedBST(start, mid - 1));
        newNode.right= (balancedBST(mid + 1, end));

        return newNode;
    }
    return balancedBST(0, sortedData.length-1);
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };


const tree = Tree([2, 4, 0, 4, 7, 1, 9]);

prettyPrint(tree.root);
console.log(tree);

const insert = (key) => {
    root = insertRec(tree.root, key);
}
