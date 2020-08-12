const dictionary = require('./wordOptimized.json');

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
  start = str.length > 31 ? 31 : str.length;

    let regex = new RegExp(`[^${str}]`);
    while(start > 0){
        let optimizedSearch = dictionary[start].filter(word => !regex.test(word));
      for (const word of optimizedSearch) {
        if(contains(word,str)){
            return word;
        }
      }
      start--;
    }
}

 module.exports = getLongestWord;
