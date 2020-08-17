function longestRunOfTwoNumbers(input){
    let i_firstNum,i_secondNum,longestRun="";
    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        if(i_firstNum===undefined) i_firstNum = i;
        if(i_secondNum===undefined && input[i_firstNum]!==input[i]) i_secondNum = i;

            if(number!==input[i_firstNum] && number!==input[i_secondNum]){
                let runLength = i-i_firstNum;
                if(runLength > longestRun.length) longestRun = input.substring(i_firstNum,i);
                let counter_down = i -1;
                while(input[counter_down] === input[counter_down-1]){
                    counter_down--;
                }
                i_firstNum = counter_down;
                i_secondNum =i;
            }
            if(i === input.length-1){
              if(longestRun!=="") longestRun = input.length-i_firstNum >= longestRun.length ? input.substring(i_firstNum) : longestRun;
            } 
    }
    return longestRun === "" ? input : longestRun;
}
//longestRunOfTwoNumbers();
module.exports = longestRunOfTwoNumbers;