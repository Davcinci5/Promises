const runBatches = require('./exe1');
jest.setTimeout(300000);

test('EXERCISE 1: Expect to get an array of lenght 10 running 5 promises at the time',async () =>{
   const data =  await runBatches.runBatches(runBatches.tasks10,5);
   expect(data).toHaveLength(10);
});
test('EXERCISE 1: Expect to get an array of lenght 6 running 7 promises at the time',async () =>{
    const data =  await runBatches.runBatches(runBatches.tasks6,7);
    expect(data).toHaveLength(6);
 });

 test('EXERCISE 1: Expect to get an array of lenght 20 running 10 promises at the time',async () =>{
    const data =  await runBatches.runBatches(runBatches.tasks20,10);
    const array = [{"value": 0}, {"value": "error"}, {"value": 2}, {"value": "error"}, {"value": 4}, {"value": "error"}, {"value": 6}, {"value": "error"}, {"value": 8}, {"value": "error"}, {"value": 10}, {"value": "error"}, {"value": 12}, {"value": "error"}, {"value": 14}, {"value": "error"}, {"value": 16}, {"value": "error"}, {"value": 18}, {"value": "error"}];
    expect(data).toHaveLength(20);
    expect(data).toEqual(array);
 });