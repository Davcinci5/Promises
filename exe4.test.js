const mergeArray = require('./exe4');

test('EXERCISE 4: merge two blocks',() =>{
    const largeArray = [1,3,5,7,9].concat(new Array(5));
    const smallArray = [0,2,4,6,8];
    const largeArraySize = largeArray.length;
    mergeArray(largeArray, smallArray);
    expect(largeArray).toEqual([0,1,2,3,4,5,6,7,8,9]);
 });
 
 test('EXERCISE 4: merge two blocks',() =>{
   const largeArray = [1,2,5,7,9].concat(new Array(5));
   const smallArray = [0,3,4,6,8];
    mergeArray(largeArray, smallArray);
   expect(largeArray).toEqual([0,1,2,3,4,5,6,7,8,9]);
 });

 test('EXERCISE 4: merge two blocks',() =>{
   const largeArray = [0,1,2,6,8,10,12,14].concat(new Array(8));
   const smallArray = [3,4,5,7,9,11,13,15];
    mergeArray(largeArray, smallArray);
   expect(largeArray).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
 });

 test('EXERCISE 4: merge two blocks',() =>{
  const largeArray = [0,1,2,3,6,8,12,14].concat(new Array(6));
  const smallArray = [4,5,7,9,10,11];
   mergeArray(largeArray, smallArray);
  expect(largeArray).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14 ]);
});

test('EXERCISE 4: merge two blocks',() =>{
  const largeArray = [1,3,6,9,10,11,13,15].concat(new Array(8));
  const smallArray = [2, 4, 5 ,7, 8,12, 14,16];
   mergeArray(largeArray, smallArray);
  expect(largeArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]);
});

test('EXERCISE 4: merge two blocks',() =>{
  const largeArray = [9,10,11,13,15].concat(new Array(8));
  const smallArray = [2, 4, 5 ,7, 8,12, 14,17];
   mergeArray(largeArray, smallArray);
  expect(largeArray).toEqual([2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17 ]);
});