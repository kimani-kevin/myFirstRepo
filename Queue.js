class Queue{


    constructor(){
      this.data=[]
    }

    //adding an element to the very last element of the queue
    push(data){
      this.data.push(data);
      return console.log(`${data} has been pushed` );

    }

//removing the first element in the queue
    pop(){
        this.data.shift();
        return console.log("The first element has been removed.");
    }

    //looking at the very first element
    peek(){
         this.data[0];
    }


    //determinig the size of the queue
    size(){
         let x=this.data.length;

         return console.log("we have:"+x+" elements");
    }
}


//lets push
queue0= new Queue();
queue0.push("The first element");
queue0.push("The second element");
queue0.push("The third element");
queue0.push("The fourth element");
queue0.push("The fifth element");

//lets peek
queue0.peek();


//what is its size
queue0.size();

//lets delete items
queue0.pop();
queue0.pop();
queue0.pop();
queue0.pop();
queue0.pop();


//lets see it's size now
queue0.size();