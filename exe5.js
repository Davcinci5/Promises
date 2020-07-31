//Write a function that will reverse N sized blocks of an array.

function reverseBlocks(arr, blockSize){
    if(arr.length === 0 || blockSize <= 1) return arr;
    let multiplyerNextStar = 0;
    let start = multiplyerNextStar * blockSize,
        end =  start + (blockSize - 1); 
        while(end <= arr.length -1){
            while (start < end) 
            { 
               [arr[start],arr[end]] = [arr[end],arr[start]];
                start++; 
                end--; 
            }
            start = ++multiplyerNextStar * blockSize,
            end =  start + (blockSize - 1); 
        }

        end = arr.length-1;

        while(start < end){
            [arr[start],arr[end]] = [arr[end],arr[start]];
             start++;
             end--;
        }
        return arr;
}
const arr = [0,1,2,3,4,5,6,7,8,9];
const blockSize = 4;
const data = reverseBlocks(arr, blockSize);


// module.exports = reverseBlocks;


