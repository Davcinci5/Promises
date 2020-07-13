//Write a function that will reverse N sized blocks of an array.
const arr = [0,1,2,3,4,5,6,7,8,9];
const blockSize = 3;
reverseBlocks(arr, blockSize);
/**
* Expected result:
* [2,1,0,5,4,3,8,7,6,9]
*/
function reverseBlocks(arr, blockSize){
    let helper = 0;

    let start = helper * blockSize,
        end =  start + (blockSize - 1); 
        while(end <= arr.length -1){
            while (start < end) 
            { 
                let temp = arr[start];  
                arr[start] = arr[end]; 
                arr[end] = temp; 
                start++; 
                end--; 
            }
            helper++; 
            start = helper * blockSize,
            end =  start + (blockSize - 1); 
        }
        return arr;
}

module.exports = reverseBlocks;


