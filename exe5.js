//Write a function that will reverse N sized blocks of an array.

function reverseBlocks(arr, blockSize){

    if(arr.length === 0 || blockSize <= 1) return arr;

    let multiplyerNextStar = 0;
    let length = arr.length - 1;
    let start = multiplyerNextStar * blockSize,
        end = blockSize > length ? length:  start + (blockSize - 1), 
        temp;

        while(start < length){
            while (start < end) 
            { 
                temp = arr[start];
                arr[start++] = arr[end];
                arr[end--] = temp;
            }
                start = ++multiplyerNextStar * blockSize,
                end =  start + (blockSize - 1); 
            if(end > length) end = length; 
        }

        return arr;
}


 module.exports = reverseBlocks;


