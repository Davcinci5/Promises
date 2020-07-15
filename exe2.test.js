jest.setTimeout(300000);
const queryRetry =  require('./exe2');

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