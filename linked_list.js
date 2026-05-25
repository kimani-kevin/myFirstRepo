//creating a node

class Node {
    constructor (data){
        this.data=data;
        this.next=null;
    }

}


//creating a linked list class

class linkedlist{
    constructor(head){
      this.head=null;
    }
    append(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head= newNode;
            return;
        }


        let current=this.head;
        while(current.next !== null){
            current=current.next;
        }

        current.next=newNode;

    }
    traverse(){
        let current=this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;    
        }
    }
    remove(data){
        let current=this.head;
        while (current !== null){
            if (current.data === data){
                current.next= current.next.next;
                current.data= null;
            }
            
            current=current.next;

        }

    }
}


const list= new linkedlist();
list.append("Hello world");
list.append("this is the second node");
list.append("This is the third node");
list.append("This is the fourth node");
list.traverse();
list.remove("Hello world");
list.traverse();
list.append("Hello world");
list.traverse();
