function Queue(){
    var queue  = [];
    var offset = 0;
  
    this.isEmpty = function(){
      return (queue.length == 0);
    }
  
    this.enqueue = function(item){
      queue.push(item);
    }

    this.dequeue = function(){
  
      if (queue.length == 0) return undefined;
  
      var item = queue[offset];
  
      if (++ offset * 2 >= queue.length){
        queue  = queue.slice(offset);
        offset = 0;
      }
  
      return item;
  
    }
  }