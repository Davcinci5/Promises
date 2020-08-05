const dictionary = require('./words_dictionary.json');


function getLongestWord(letters){
    let longest = "";
    
    function permutations(prefix,suffix){
        if(dictionary[prefix] && prefix.length >= longest.length){
          if(prefix.length === longest.length ){
            longest = prefix < longest ? prefix : longest;
          }else{
            longest = prefix;
          }
        }
        if(suffix!==""){
            for(let i=0;i<suffix.length;i++){
                permutations(prefix+suffix[i],suffix.substring(0,i) + suffix.substring(i+1,suffix.length))
            }
        }
    
    }
    permutations("",letters.toLowerCase());
    return longest;
}

module.exports = getLongestWord;

