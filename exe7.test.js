const longestRunOfTwoNumbers =  require('./exe7');

test('EXERCISE 7: only 1 number 11111',async() =>{
    const tofind = '11111';
    const data = longestRunOfTwoNumbers('11111');
    expect(data).toBe(tofind);
 });

 test('EXERCISE 7: only 2 numbers 22224444',async() =>{
    const tofind = '22224444';
    const data = longestRunOfTwoNumbers('22224444');
    expect(data).toBe(tofind);
 });

 test('EXERCISE 7: find 1121222 between 1212223311212223',async() =>{
    const tofind = '1121222';
    const data = longestRunOfTwoNumbers('1212223311212223');
    expect(data).toBe(tofind);
 });


 test('EXERCISE 7: find the second longest number',async() =>{
    const tofind = '11112222';
    const data = longestRunOfTwoNumbers('2222444411112222');
    expect(data).toBe(tofind);
 });

 test('EXERCISE 7: find the longest one lined up as the last one',async() =>{
    const tofind = '111122222';
    const data = longestRunOfTwoNumbers('22224444111122222');
    expect(data).toBe(tofind);
 });
 
 test('EXERCISE 7: find the longest one lined up as the first one',async() =>{
    const tofind = '343434334';
    const data = longestRunOfTwoNumbers('34343433454458484');
    expect(data).toBe(tofind);
 });