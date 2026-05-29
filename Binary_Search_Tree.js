class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}


class BinarySearchTree {


    constructor(){
        this.root=null
    }


    insert(data){
        const newNode = new Node(data);

        if(!this.root){
            this.root=newNode;
            return;
        }

        let current= this.root;
        while(true){
            if(data<current.data){
            if(!current.left){
                current.left=newNode;
                return;

            }
            current=current.left;
        }
        else {
             if(!current.right){
                current.right=newNode;
                return;
             }
             current=current.right;  

        }
        }
    



    }

    inorder(node = this.root){
        if(node){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
}


const bst= new BinarySearchTree();

const an_array=[100,500,700,1,3,4,56,6,7,7,8,53,6,,53,24,5,23,24,23,67];

for(let i=0; i<an_array.length;i++){
    bst.insert(an_array[i]);
}

bst.inorder();
