import BinaryTree from "../../src/binarytree/BinaryTree";

test('should have a root node with value', ()=>{
    const binaryTree = new BinaryTree();
    binaryTree.addNode(15);
    const rootNode = binaryTree.getRootNode();

    expect(rootNode.value).toEqual(15);
});

test('should have a two nodes with values', ()=>{
    const binaryTree = new BinaryTree();
    binaryTree.addNode(15);
    binaryTree.addNode(18);
    binaryTree.addNode(5);
    const rootNode = binaryTree.getRootNode();

    expect(rootNode.left.value).toEqual(5);
    expect(rootNode.right.value).toEqual(18);
});