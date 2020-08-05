const getLongestWord =  require('./exe6');

test('EXERCISE 6: FIND LARGEST WORD add',async() =>{
    const tofind = 'add';
    const data = getLongestWord('XATDD');
    expect(data).toBe(tofind);
 });

 test('EXERCISE 6: FIND LARGEST WORD steradian',async() =>{
    const tofind = 'steradian';
    const data = getLongestWord('ESRATINDA');
    expect(data).toBe(tofind);
 });

 test('EXERCISE 6: FIND LARGEST WORD mistuned',async() =>{
    const tofind = 'mistuned';
    const data = getLongestWord('MSTUEHNDI');
    expect(data).toBe(tofind);
 });

 test('EXERCISE 6: FIND LARGEST WORD prettiest',async() =>{
    const tofind = 'prettiest';
    const data = getLongestWord('xtpteteirs');
    expect(data).toBe(tofind);
 });

