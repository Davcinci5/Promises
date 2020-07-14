const runBatches = require('./exe1');
const queryRetry =  require('./exe2');
const cancellableFetch = require('./exe3');
const mergeArray = require('./exe4')
const reverseBlocks =  require('./exe5');

jest.setTimeout(30000);

test('EXERCISE 1: Expect to get an array of lenght 10 running 5 promises at the time',async () =>{
   const data =  await runBatches.runBatches(runBatches.tasks10,5);
   expect(data).toHaveLength(10);
});
test('EXERCISE 1: Expect to get an array of lenght 6 running 7 promises at the time',async () =>{
    const data =  await runBatches.runBatches(runBatches.tasks6,7);
    expect(data).toHaveLength(6);
 });

 test('EXERCISE 1: Expect to get an array of lenght 500 running 100 promises at the time',async () =>{
    const data =  await runBatches.runBatches(runBatches.tasks500,100);
    expect(data).toHaveLength(500);
 });

 test('EXERCISE 2: Get query successfully in one trie',async () =>{
     const against = { userId: 1,
                        id: 1,
                        title: 'delectus aut autem',
                        completed: false 
                    };

    const data =  await queryRetry('https://jsonplaceholder.typicode.com/todos/1', 3, 100, 100);
    expect(data).toEqual(against);
 });

 test('EXERCISE 2: Faiil in getting data after 3 times',async () =>{
   try {
      const data =  await queryRetry('https://jsonplacehol.typicode.com/todos/1', 3, 100, 100);
    } catch (e) {
      expect(e).toMatch(`number of tries exceeded, times ${3}`);
    }
});

test('EXERCISE 3 : Cancel a fetch request',() =>{
   const against = { userId: 1,
                           id: 1,
                          title: 'delectus aut autem',
                          completed: false 
                          };
   const obj = cancellableFetch('https://jsonplacehol.typicode.com/todos/1');
         obj.cancel();
         return obj.then(response => response.json())
         .then(data => {expect(data).toEqual(against)}).catch( e => expect(e).toMatch('aborted Promise'));
});

test('EXERCISE 3 : Succeessed a fetch',async() =>{
   const against = { userId: 1,
                           id: 1,
                          title: 'delectus aut autem',
                          completed: false 
                          };

   const obj = cancellableFetch('https://jsonplaceholder.typicode.com/todos/1');
            let response = await obj.then(response => response.json());
                expect(response).toEqual(against)
});

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

test('EXERCISE 5: reverse a block',async() =>{
   const arr = [0,1,2,3,4,5,6,7,8,9];
   const blockSize = 3;
   const data = reverseBlocks(arr, blockSize);
   expect(data).toEqual([2,1,0,5,4,3,8,7,6,9]);
});

