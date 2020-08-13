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

  findLargest(letters,node = this.root){
      let largestWord = "";
      let search = (node,letters,word) => {
        if(node.keys.size != 0){
          let seen = {}
          for(let letter of letters){
              if(!seen[letter]){
                if(node.keys.has(letter)){
                  let splitWord = letters.replace(new RegExp(letter),"");
                  search(node.keys.get(letter), splitWord,word.concat(letter));
                }
              }
              seen[letter] = true;
          }
       }
        if(node.isEnd()){
          if(word.length >= largestWord.length){
             largestWord = word.length > largestWord.length ? word : word < largestWord ? word : largestWord;   
          }
          return;
        } 
      }
      search(node,letters,"");
      return largestWord;
  }
}
module.exports = Trie;

// let myTrie = new Trie();
// myTrie.add('ball');
// myTrie.add('bat');
// myTrie.add('doll');
// myTrie.add('dark');
// myTrie.add('dorm');
// myTrie.add('send');
// myTrie.add('sense');

// // console.log(myTrie);
// console.log("value ",myTrie.myChidorisFUnction('sseend'));
