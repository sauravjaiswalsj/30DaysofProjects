class Queue{
	constructor(){
		this.item=[];
	}
	enqueue(data){
		this.item.unshift(data);
	}
	isEmpty(){
		return this.item.length===0;
	}
	dequeue(){
		if(this.isEmpty()){
			return "Underflow";
		}
		return this.item.pop();
	}
	
}

const pushItem = (e)=>{
	const q = new Queue();
	q.enqueue(10);
	q.enqueue(20);
	q.dequeue();
	console.log(q);
}
pushItem();
