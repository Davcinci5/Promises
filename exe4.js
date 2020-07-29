const PriorityQueue = require('./priorityQueue');

function mergeArrays(largeA,smallA) {
    let queue = new PriorityQueue();
    //smaller
    let min;
    for(let i=0;i<largeA.length;i++){
      min = queue.isEmpty() ? largeA[i] : queue.firstElement();

      if(i < smallA.length){
        if(smallA[i] < min){
          min = smallA[i];
        }else{
          queue.enqueue(smallA[i]);
        }
      }
      
      if(largeA[i] !== undefined ){
          if(largeA[i] < min ){
            min = largeA[i];
          }else{
            queue.enqueue(largeA[i]);
          } 
      }
    
        
       if(min === queue.firstElement()){
          min = queue.dequeue();
       }
       largeA[i] = min;
    
    }
return;
}


module.exports = mergeArrays;
