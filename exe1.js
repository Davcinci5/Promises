
const taskFactorySample = (delay, resolve, val) => 
() => new Promise((res, rej)=>setTimeout(resolve?res:rej,delay, val))

const tasks6 = [
  taskFactorySample(500,true, 1),
  taskFactorySample(1000,true, 2),
  taskFactorySample(5000,false, 'error'),
  taskFactorySample(2000,true, 4),
  taskFactorySample(1000,false, 'error'),
  taskFactorySample(1000,false, 'error'),
];
const tasks10 = [taskFactorySample(4674,true, 0),taskFactorySample(2173,false, 'error'),taskFactorySample(4996,true, 2),taskFactorySample(932,false, 'error'),taskFactorySample(926,true, 4),taskFactorySample(5093,false, 'error'),taskFactorySample(3246,true, 6),taskFactorySample(4589,false, 'error'),taskFactorySample(2075,true, 8),taskFactorySample(1461,false, 'error')];
const tasks20 = [taskFactorySample(1659,true, 0),taskFactorySample(1271,false, 'error'),taskFactorySample(2994,true, 2),taskFactorySample(1225,false, 'error'),taskFactorySample(4870,true, 4),taskFactorySample(724,false, 'error'),taskFactorySample(1216,true, 6),taskFactorySample(1075,false, 'error'),taskFactorySample(4133,true, 8),taskFactorySample(2391,false, 'error'),taskFactorySample(1380,true, 10),taskFactorySample(1808,false, 'error'),taskFactorySample(651,true, 12),taskFactorySample(1168,false, 'error'),taskFactorySample(3178,true, 14),taskFactorySample(1557,false, 'error'),taskFactorySample(705,true, 16),taskFactorySample(4217,false, 'error'),taskFactorySample(855,true, 18),taskFactorySample(624,false, 'error')]
                  
// only run two primises at a time
const batch_size = 2;
/**
 *  Expect to get an array equal to tasks.lenght
 *  with the values or reasons for each of the promises.
 *
 *  [{value: 1}, {value:2}, {error: 'error'}, ...]
 */
function runBatches(tasks,numberBtaches){
  
  return new Promise(res =>{
    
    let available =  0;
    let arre = []
    let index = 0;
    
    async function *generator(tasksN){
      for(let i=0;i<tasksN.length;i++) {
        try{
          yield await tasksN[i]();
        }catch(e){
          yield "error"
        }
      }
    }
    
    let doneTasks = generator(tasks);
    let actual;
    
    function callback({value,done}){
    if(done) {res(arre); return }; 
    arre[index++] = {value}
    actual = doneTasks.next();
    actual.then(value => callback(value));
    }
    while(available<numberBtaches){
      actual = doneTasks.next();
      actual.then(value => callback(value));
      available++
    } 
  });
}




module.exports = {tasks6,runBatches,tasks10,tasks20};



//  function createData(total){
//      let arre = '';
  
//      for(let i=0;i<total;i++){
//           let delay = Math.floor(Math.random() * 5000) + 500,
//               state = i%2 == 0 ? true:false,
//               value = state ? i : "'error'",
//               string = `taskFactorySample(${delay},${state}, ${value})`;
//               arre += arre === '' ? `[${string},` : i + 1 === total ? `${string}]` : `${string},`
//        }
//        return arre;
//     }
    


              


// resolverPromises(tasks6,2).then(console.log)

