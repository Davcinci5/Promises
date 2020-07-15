const reverseBlocks =  require('./exe5');

test('EXERCISE 5: reverse a block',async() =>{
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const blockSize = 3;
    const data = reverseBlocks(arr, blockSize);
    expect(data).toEqual([2,1,0,5,4,3,8,7,6,9]);
 });