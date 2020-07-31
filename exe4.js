

function mergeArrays(largeA,smallA) {
  let pointer_small = smallA.length - 1,
      pointer_large = largeA.length - smallA.length - 1;

      for(let i = (largeA.length - 1); i>=0; i--){
        if(largeA[pointer_large]>smallA[pointer_small] || pointer_small < 0){
          largeA[i] = largeA[pointer_large];
          pointer_large--;
        }else{
          largeA[i] = smallA[pointer_small];
          pointer_small--;
        }
      }
}



module.exports = mergeArrays;
