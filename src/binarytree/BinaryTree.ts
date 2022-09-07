import BTNode from "./BTNode";

export default class BinaryTree{

    private root : BTNode;

    public addNode(value : number) : void {
        if(!this.root){
            this.root = new BTNode();
            this.root.value = value;
        }else{
            let node = this.root;

            while( node != undefined){

                if(value < node.value){
                    if(!node.left){
                        node.left = new BTNode();
                        node.left.value = value;
                        break;
                    }else{
                        node = node.left;
                    }
                }else if(value > node.value ){
                    if(!node.right){
                        node.right = new BTNode();
                        node.right.value = value;
                        break;
                    }else{
                        node = node.right;
                    }
                }
            }
        }
    }

    public getRootNode() : BTNode {
        return this.root;
    }
}