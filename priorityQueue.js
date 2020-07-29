class PriorityQueue{
    constructor(){
        this.heap = [];
        this.size = 0;
    }

    firstElement(){
        return this.heap[0];
    }

    isEmpty(){
        return (this.heap.length == 0);
      }

    enqueue(value){
        // console.log("entro ",value);
        let position = this.size;
        this.heap[position] = value;
        while(position>0){
            let parent =  Math.floor((position + 1) / 2) - 1;
            if(this.heap[parent] <= this.heap[position]) break;
            [this.heap[parent],this.heap[position]] = [this.heap[position],this.heap[parent]];
            position =parent;
        }
        this.size++;
    }

    dequeue(){
        if(this.size == 0) return undefined;
        let toReturn = this.heap[0];
        this.heap[0] = this.heap[this.size-1];
        
        let position = 0;
        while(position < Math.floor(this.size/2)){
            let leftChild = (position * 2 )+ 1;
            let rightChild = leftChild + 1;
            if(rightChild < this.size && this.heap[leftChild] > this.heap[rightChild]){
                if(this.heap[position]<=this.heap[rightChild]) break;
                [this.heap[rightChild],this.heap[position]] = [this.heap[position],this.heap[rightChild]];
                position = rightChild;
            }else{
                if(this.heap[position] <= this.heap[leftChild]) break;
                [this.heap[leftChild],this.heap[position]] = [this.heap[position],this.heap[leftChild]];
                position = leftChild;
            }
        }
        // console.log("salio: ",toReturn);
        this.size--;
        return toReturn;

    }
    
}

module.exports = PriorityQueue;

