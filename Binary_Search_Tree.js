//creating the dataset
const dataset=new Array(100,45,600);


//defining the nodes
let parent;
let left_child;
let right_child;
let leaf;
let new_node;
let exchange_slot;


//formattiong tha data to fit a simple node
left_child=dataset[0];
parent=dataset[1];

if(left_child>parent){
    exchange_slot=parent;
    parent=left_child;
    left_child=exchange_slot;
}


console.log(parent+" is the parent node "+left_child+" is the left_child");

//adjustingt the node to add on a new node in the mix.
new_node=dataset[2];
if(new_node>left_child){
    if(new_node>parent){
        right_child=dataset[2];
    }
    else{
        exchange_slot=left_child;
        left_child=new_node;
        leaf=exchange_slot;
        
    }
}
else{
    leaf=new_node;
}


console.log(leaf+" is the leaf node "+left_child+ " is the left node "+parent+" is the parent node "+right_child+" is the right node");


//adjusting the algorithm to sort more data into nodes
