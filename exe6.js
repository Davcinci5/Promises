const dictionary = require('./words_dictionary.json');
const Trie = require('./tree');

let myTrie = new Trie();
for (let word of Object.keys(dictionary)){
  myTrie.add(word);
}
function getLongestWord(str){
  str= str.toLowerCase();
  return myTrie.findLargest(str);
}

module.exports = getLongestWord;
