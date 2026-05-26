const myarray=[];

class stack{
    constructor(data){
        this.data=data;
    }

    push(data, myarray){
        let i=myarray.length;
        myarray[i]=data;
        return console.log(myarray[i]+" has been pushed");
    }

    pop(myarray){
        let i=myarray.length;
        if (i===0){
            console.log("STACK UNDERFLOW")
        }
        myarray.pop();
        return console.log(myarray.length);
    }
}


let stack0= new stack();


stack0.push("Hello world", myarray);
stack0.push("This is the second element", myarray);
stack0.push("The stack is forming up!!!", myarray);
stack0.push("This is the third element", myarray);
stack0.push("This is the fourth element", myarray);


console.log(myarray.length);

stack0.pop(myarray);
stack0.pop(myarray);
stack0.pop(myarray);
stack0.pop(myarray);

