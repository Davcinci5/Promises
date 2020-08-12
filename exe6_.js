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

let Arrwords = Object.keys(dictionary),
    optimizedDictionary = {},
      start = 0;

  for (let word of Arrwords) {
    let length = word.length;
    if(!optimizedDictionary[length]) optimizedDictionary[length] = [];
    optimizedDictionary[length].push(word);
    start = start < length ? length : start;     
  }

  start = str.length > start ? start : str.length;

      let regex = new RegExp(`[^${str}]`);
      while(start > 0){
          let optimizedSearch = optimizedDictionary[start].filter(word => !regex.test(word));
          console.log(optimizedSearch);
        // for (const word of optimizedSearch) {
        //   if(contains(word,str)){
        //       return word;
        //   }
        // }
        start--;
      }
  }
   console.log(getLongestWord("adtdx"));
                  
