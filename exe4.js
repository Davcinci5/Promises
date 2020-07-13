const largeArray = [1,3,5,7,9].concat(new Array(9));
const smallArray = [0,2,4,6,8];
const largeArraySize = largeArray.length;

function mergeArrays(large,small) {
    let position = 0;

    function heapify(arr, length, i){
        let  largest = i;
        let left = 2 * i + 1;
        let right = left +1;
    
        if(left < length && arr[left] > arr[largest]){
            largest = left;
        }
        if(right < length && arr[right] > arr[largest]){
            largest = right;
        }
        if(largest != i){
            [arr[i],arr[largest]] = [arr[largest],arr[i]]; 
            heapify(arr, length,  largest);
        }
    
        return arr;
    }
    
    function heapSort(arr){
        let length = arr.length;
        let i = Math.floor(length/2 -1); //get the last parent
        let k = length -1; //get the last child
        //make max-heap
        while(i>=0){
            heapify(arr,length,i);
            i--;
        }
    
        while(k >= 0){
            [arr[0],arr[k]] = [arr[k],arr[0]];
            heapify(arr,k,0);
            k--
        }
        return arr;
    }

    while(large[position] !== undefined) position++;

    for(let i=0;i<small.length;i++){
        if(position<large.length){
            large[position] = small[i];
            position++;
        }else{
            break;
        }
    }

    return heapSort(large);
    



}
 
module.exports = mergeArrays;
// mergeArrays(largeArray, smallArray);
// console.log(largeArray); // Expecting: [0,1,2,3,4,5,6,7,8,9]
// console.log(largeArraySize === largeArray.length)
