class Node{
  constructor(){
    this.keys = new Map();
    this.end = false;
    this.words =[]
  }
  isKeysEmpty(){
    return this.keys.size === 0;
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
  add(input){
    let node= this.root;
    let sorted_input = input.split('').sort().join(''),
        letter,nextLetter;
    while(sorted_input.length !== 0){
         letter = sorted_input[0],
         nextLetter = sorted_input[1];
      if(!node.keys.has(letter)){ 
          node.keys.set(letter,new Node());
        }
         node = letter!== nextLetter?  node.keys.get(letter) : node; 
         sorted_input = sorted_input.substr(1);
      } 
        node.setEnd();
        node.words.push(input);
      return;
  }

  findLargest(_letters){
    let _node = this.root, largestWord = "", letter,nextLetter,
        sorted = _letters.split('').sort().join('');

        let search = (node,letters) => {
            if(!node.isKeysEmpty()){
              for (let i=0;i<letters.length;i++){
                letter = letters[i]; nextLetter = letters[i+1];
                if(letter!==nextLetter && node.keys.has(letter)){
                    search(node.keys.get(letter),letters.substr(1));
                }
              }
            }
            if(node.isEnd()){
              node.words.forEach( word => {
                if(validWord(word) && word.length >= largestWord.length){
                  largestWord = word.length > largestWord.length ? word : word < largestWord ? word : largestWord; 
                }
              });
            }
        }

        let validWord = (word) => {
          let pointers = {},start,index,letter;
          for(let i=0;i<word.length;i++){
              letter = word[i]; start = pointers[letter] === undefined ? 0 : (pointers[letter]+1);
              index = _letters.indexOf(letter,start);
              if(index === -1) return false;
              pointers[letter] = index;
          }
          return true;
        }
        search(_node,sorted);
        return largestWord;
  }
}

module.exports = Trie;

