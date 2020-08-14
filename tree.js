class Node{
  constructor(){
    this.keys = new Map();
    this.end = false;
  }
  setEnd(){
     this.end = true;
  }
  isEnd(){
    return this.end;
  }
}

class Trie{
  constructor(){
    this.root = new Node();
  }
  add(input, node= this.root){
    if(input.length == 0){
      node.setEnd();
      return;
    } else if(!node.keys.has(input[0])){
      node.keys.set(input[0],new Node());
    }
    return this.add(input.substr(1),node.keys.get(input[0]));
  }

  findLargest(letters,_node = this.root){
      let largestWord = "";
      let search = (node,word,indexes) =>{
         if(node.keys.size != 0){
            for (let letter of node.keys.keys()) {
              let start = indexes[letter] === undefined ? 0 : (indexes[letter]+1),
                  index = letters.indexOf(letter,start);
              if(index !== -1){
                let newIndex = {...indexes};
                    newIndex[letter] = index;
                    search(node.keys.get(letter),word.concat(letter),newIndex);
                }
            }
         }
         if(node.isEnd()){
           if(word.length >= largestWord.length){
             largestWord = word.length > largestWord.length ? word : word < largestWord ? word : largestWord;   
           }
           return;
         } 
       }
       search(_node,"",{});
      return largestWord;
  }
}
module.exports = Trie;

