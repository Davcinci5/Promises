const mergeArray = require('./exe4');

test('EXERCISE 4: merge two blocks',async() =>{
    const largeArray = [1,3,5,7,9].concat(new Array(5));
    const smallArray = [0,2,4,6,8];
    const largeArraySize = largeArray.length;
    const data = mergeArray(largeArray, smallArray);
    expect(data).toEqual([0,1,2,3,4,5,6,7,8,9]);
 });
 
 test('EXERCISE 4: merge two blocks',async() =>{
    const largeArray = [1,3,5,7,9].concat(new Array(10));
    const smallArray = [0,2,11,12,4,6,8,10,13,14];
    const largeArraySize = largeArray.length;
    const data = mergeArray(largeArray, smallArray);
    expect(data).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
 });