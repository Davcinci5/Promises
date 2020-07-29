const reverseBlocks =  require('./exe5');

test('EXERCISE 5: reverse a empty array ',async() =>{
    const arr = [];
    const blockSize = 10;
    const data = reverseBlocks(arr, blockSize);
    expect(data).toEqual([]);
 });

test('EXERCISE 5: reverse a block(0)',async() =>{
   const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
   const blockSize = 0;
   const data = reverseBlocks(arr, blockSize);
   expect(data).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
});

test('EXERCISE 5: reverse a block(5) array length 3',async() =>{
    const arr = [1,2,3];
    const blockSize = 5;
    const data = reverseBlocks(arr, blockSize);
    expect(data).toEqual([1,2,3]);
 });

test('EXERCISE 5: reverse a block(3) array s length 10 ',async() =>{
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const blockSize = 3;
    const data = reverseBlocks(arr, blockSize);
    expect(data).toEqual([2,1,0,5,4,3,8,7,6,9]);
 });

 test('EXERCISE 5: reverse a block(4) array length 10',async() =>{
    const arr = [0,1,2,3,4,5,6,7,8,9];
    const blockSize = 4;
    const data = reverseBlocks(arr, blockSize);
    expect(data).toEqual([3,2,1,0,7,6,5,4,8,9]);
 });

 test('EXERCISE 5: reverse a block(5) array s length 15',async() =>{
    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    const blockSize = 5;
    const data = reverseBlocks(arr, blockSize);
    expect(data).toEqual([4,3,2,1,0,9,8,7,6,5,14,13,12,11,10]);
 });
