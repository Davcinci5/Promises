var fs = require('fs');
const dictionary = require('./words_dictionary.json');
keys = Object.keys(dictionary);
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
keys.sort(function(a,b){
    return a.length - b.length; 
  });
fs.writeFile('mynewfile3.txt', keys, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });