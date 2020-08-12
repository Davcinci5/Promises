var fs = require('fs');
const dictionary = require('./words_dictionary.json');
//keys = Object.keys(dictionary);
// keys.sort(function(a,b){
  //     if (a < b) {
    //         return -1;
    //       }
    //       if (a > b) {
      //         return 1;
      //       }
      
      //       // names must be equal
      //       return 0; 
      //   });
      
      // keys.sort();
      //   keys.sort(function(a,b){
      //     return a.length - b.length; 
      //   });
        let Arrwords = Object.keys(dictionary)
        optimizedDictionary = {};
        for (let word of Arrwords) {
          let length = word.length;
          if(!optimizedDictionary[length]) optimizedDictionary[length] = [];
          optimizedDictionary[length].push(word);
        }
fs.writeFile('mynewfile3.txt', JSON.stringify(optimizedDictionary), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });