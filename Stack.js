class Stack{
    constructor(){
        this.data=[];
    }

    push(item){
        this.data.push(item);
        console.log(`${item} has been pushed`);
    }

    pop(){
        if(this.data.length==0){
            console.log("STACK UNDERFLOW");
            return;
        }
        const removed=this.data.pop();
        console.log(`${removed} has been popped`);
    }

    peek(){
        return this.data[this.data.length - 1];
    }

    size(){
        return this.data.length;
    }
}

const stack0= new Stack();


stack0.push("Hello world");
stack0.push("The second element");
stack0.push("The third element");
stack0.push("The fourth element");

console.log(stack0.peek());

console.log("Stack's Size:", stack0.size());

stack0.pop();
stack0.pop();
stack0.pop();
stack0.pop();
stack0.pop();