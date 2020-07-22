const runBatches = require('./exe1');


test('EXERCISE 1: 6 Promises finish in 11 sec, in batches of 4',async () =>{
   jest.setTimeout(12000);
   const data =  await runBatches.runBatches(runBatches.tasks6,4);
   const array = [{"value": 1}, {"value": 2}, {"value": "error"}, {"value": 4}, {"value": "error"}, {"value": "error"}];

   expect(data).toEqual(array);
});

test('EXERCISE 1: 6 Promises finish in 13 sec, in batches of 3',async () =>{
   jest.setTimeout(14000);
   const data =  await runBatches.runBatches(runBatches.tasks6,3);
   const array = [{"value": 1}, {"value": 2}, {"value": "error"}, {"value": 4}, {"value": "error"}, {"value": "error"}];

   expect(data).toEqual(array);
});

test('EXERCISE 1: 6 Promises finish in 16 sec, in batches of 2',async () =>{
   jest.setTimeout(17000);
   const data =  await runBatches.runBatches(runBatches.tasks6,2);
   const array = [{"value": 1}, {"value": 2}, {"value": "error"}, {"value": 4}, {"value": "error"}, {"value": "error"}];
   expect(data).toEqual(array);
});

test('EXERCISE 1: 4 Promises finish in 5 seconds, in bacthes of 2',async () =>{
   jest.setTimeout(6000);
   const data =  await runBatches.runBatches(runBatches.tasks4,2);
   expect(data).toHaveLength(4);
});

test('EXERCISE 1: 4 Promises finish in 5 seconds, in bacthes of 4',async () =>{
   jest.setTimeout(6000);
   const data =  await runBatches.runBatches(runBatches.tasks4,4);
   expect(data).toHaveLength(4);
});

test('EXERCISE 1: 10 Promises finish in 7 seconds, in batches of 5',async () =>{
    jest.setTimeout(8000);
   const data =  await runBatches.runBatches(runBatches.tasks10,5);
   expect(data).toHaveLength(10);
});

test('EXERCISE 1: 10 Promises finish in 16 seconds, in batches of 2',async () =>{
   jest.setTimeout(17000);
  const data =  await runBatches.runBatches(runBatches.tasks10,2);
  expect(data).toHaveLength(10);
});

test('EXERCISE 1: 10 Promises finish in 8 seconds, in batches of 4',async () =>{
   jest.setTimeout(9000);
  const data =  await runBatches.runBatches(runBatches.tasks10,4);
  expect(data).toHaveLength(10);
});


