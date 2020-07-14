// Given a random set of vowels and consonants,, find the longest word that can be formed. 
// Letters can be repeated 
// Letters can only be used once
// Not all letters have to be used.
// If there are multiple longest words, return the one that is lexicographically first

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

function deleted(query){
    let queue = new Queue();
    let set = new Set();
    let dictionary = new Set(['a','aa','ab','aaa','MINDSET'])

    queue.enqueue(query);
    set.add(query);

    while(!queue.isEmpty()){
        let s = queue.dequeue();
        set.delete(s);
        if(dictionary.has(s)) return s;
        for(let i=0;i<s.length;i++){
            let sub = s.substring(0,i) + s.substring(i+1,s.length);
            if(!set.has(sub) && sub.length > 0){
                console.log(sub);
                queue.enqueue(sub);
                set.add(sub);
            }
        }
    }

    return -1;
}

let result = deleted('MSTUEHNDI');
console.log(result);

const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };
  
  console.log(stringPermutations('abc'));
  console.log(stringPermutations('*$*'));