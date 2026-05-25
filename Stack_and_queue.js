class stack{


constructor(data, address) {
    data=this.data;
    address=this.address;
}

push(data, address) {
 address=address+1;

 let element={};
 element.data=data;
 element.address=address;
return element;
}


traversal(address){
  for(let i=address; i>0; i=i-1){
    if(i==n){
        console.log(i);
        return address;
    }
  }  
}
}



let stack0=new stack();
let stack1=new stack();
let stack2=new stack();

let x= stack0.push("Stake",0);
let y=stack1.push("Chicken",1);
let z=stack2.push("Fish",2);

let myarray=[];
myarray[1]=x.address;
myarray[2]=y.address;
myarray[3]=z.address;

for(let i=0; i<myarray.length; i++){
let n=2;
    if (i==n || i>n){
        if(y.address==i){
            delete y.data;
            delete y.address;
            console.log(y);
        }
        if(z.address==i){
            delete z.data;
            delete z.address;
            console.log(y);
        }

    }
    console.log(y);
    
}


console.log(x.address);
console.log(y.address);
console.log(z.address);


  
//stack0.push("Itel");
//stack0.push("Apple")
//console.log(stack1.address);
//console.log(address);


