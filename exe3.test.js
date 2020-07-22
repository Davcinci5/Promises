jest.setTimeout(300000);
const cancellableFetch = require('./exe3');

test('EXERCISE 3 : Cancel a fetch request',() =>{
    const against = { userId: 1,
                            id: 1,
                           title: 'delectus aut autem',
                           completed: false 
                           };
    const obj = cancellableFetch('https://jsonplacehol.typicode.com/todos/1');
          obj.cancel();
          return obj.then(response => response.json())
          .then(data => {expect(data).toEqual(against)}).catch( e => expect(e).toMatch('mission aborted'));
 });
 
 test('EXERCISE 3 : Succeessed a fetch',async() =>{
    const against = { userId: 1,
                            id: 1,
                           title: 'delectus aut autem',
                           completed: false 
                           };
 
    const obj = cancellableFetch('https://jsonplaceholder.typicode.com/todos/1');
             let response = await obj.then(response => JSON.parse(response));
                 expect(response).toEqual(against)
 });