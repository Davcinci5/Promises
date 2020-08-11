const dictionary = require('./words_dictionary.json');


function contains(dictionary,myWord){
  let seen = {},
      start,
      index;
for(let i=0;i<dictionary.length;i++){
      start = seen[dictionary[i]] !== undefined ? seen[dictionary[i]] : -1; 
      index = myWord.indexOf(dictionary[i],start+1);
      if(index === -1) return false;
      seen[dictionary[i]] = index;
   }
   return true;
}



function getLongestWord(str){
  str = str.toLowerCase();
  keys = Object.keys(dictionary);

  let arreWords = {},
      start = 0;

  for (let key of keys) {
    let length = key.length;
    if(arreWords[length] === undefined) arreWords[length] = [];
    arreWords[length].push(key);
    start = start < length ? length : start;     
  }

  start = str.length > start ? start : str.length;

 while(start > 0){
    for (const word of arreWords[start]) {
      if(contains(word,str)){
          return word;
      }
    }
    start--;
  }

}

 module.exports = getLongestWord;
