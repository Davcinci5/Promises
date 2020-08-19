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
        letter;
    while(sorted_input.length !== 0){
         letter = sorted_input[0];
      if(!node.keys.has(letter)){ 
          node.keys.set(letter,new Node());
        }
        node = node.keys.get(letter);
         sorted_input = sorted_input.substr(1);
      } 
        node.setEnd();
        node.words.push(input);
      return;
  }

  findLargest(_letters){
    let _node = this.root, largestWord = "", letter,
        sorted = _letters.split('').sort().join('');


        let search = (node,letters) => {
          if(!node.isKeysEmpty()){
            let actual = ""
            for (let i=0;i<letters.length;i++){
              let letter = letters[i]; 
              if(node.keys.has(letter) && actual !==letter){
                search(node.keys.get(letter),letters.substr(i+1));
                actual = letter;
              }
            }
          }
          if(node.isEnd()){
            let word = node.words[0];
            if(word.length > largestWord.length){
              largestWord = word; 
            }
          }
        }

        search(_node,sorted);
        return largestWord;
  }
}


module.exports = Trie;



// let search = (node,letters) => {
//   // console.log(letter);
//    if(!node.isKeysEmpty()){
//      for (let i=0;i<letters.length;i++){
//        letter = letters[i]; 
//        if(node.keys.has(letter) ){
//          search(node.keys.get(letter),letters.substr(i+1));
        
//        }
//      }
//    }
//    if(node.isEnd()){
//      let word = node.words[0];
//      console.log(word);
//      if(word.length >= largestWord.length){
//        largestWord = word.length > largestWord.length ? word : word < largestWord ? word : largestWord; 
       
//      }
//    }
//  }