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
  let result = "",
  length = 0,
  keys = Object.keys(dictionary),
  i=0;
  
  keys.sort(function(a,b){
    return a.length - b.length; 
  });

 do{
    if(contains(keys[i],str)){
        result = result.length === keys[i].length ? keys[i] < result ? keys[i] : result : keys[i];
        length = result.length
      }
     i++;
  }while(i < keys.length && keys[i].length<=str.length)
  return result;
}

module.exports = getLongestWord;
