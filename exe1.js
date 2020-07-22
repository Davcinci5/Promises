
const taskFactorySample = (delay, resolve, val) => 
() => new Promise((res, rej)=>setTimeout(resolve?res:rej,delay, val))

const tasks6 = [
  taskFactorySample(5000,true, 1),
  taskFactorySample(1000,true, 2),
  taskFactorySample(5000,false, 'error'),
  taskFactorySample(2000,true, 4),
  taskFactorySample(1000,false, 'error'),
  taskFactorySample(9000,false, 'error'),
];

const tasks4 = [
  taskFactorySample(5000,true, 1),
  taskFactorySample(2000,true, 2),
  taskFactorySample(1000,false, 'error'),
  taskFactorySample(1500,true, 4)
];

const tasks10 = [taskFactorySample(4439,true, 0),
                taskFactorySample(930,false, 'error'),
                taskFactorySample(3945,true, 2),
                taskFactorySample(5040,false, 'error'),
                taskFactorySample(2682,true, 4),
                taskFactorySample(3092,false, 'error'),
                taskFactorySample(4033,true, 6),
                taskFactorySample(1309,false, 'error'),
                taskFactorySample(2916,true, 8),
                taskFactorySample(2318,false, 'error')];
                 

/**
 *  Expect to get an array equal to tasks.lenght
 *  with the values or reasons for each of the promises.
 *
 *  [{value: 1}, {value:2}, {error: 'error'}, ...]
 */
function runBatches(tasks,numberBatches){
  
  return new Promise(res =>{

    function *generator(tasksN){
      for(let i=0;i<tasksN.length;i++) {
          yield  {task: tasksN[i],index:i};
      }
    }

    let doneTasks = generator(tasks);
    let arre= [];
    let completed_counter = 0;

    async function promises(){
      let end = false;
        
      do{
        if(completed_counter === tasks.length){res(arre); return}; 
        let {value,done} = doneTasks.next();
        if(!done){
          let {task,index:i} = value; 
          try{
            let value = await task();
            arre[i] = {value};
          }catch(e){
              arre[i] = {value: "error"};
          }
          completed_counter++;   
        }else{
            end = done;
        }
      }
      while(!end);
    }

    for(let i=0;i<numberBatches;i++){
      promises();
    }
  })
}


module.exports = {tasks6,tasks4,tasks10,runBatches};



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

async function batchTasks(tasks, batchSize) {
  let executing = [];
  const results = [];
  
  for (let task of tasks) {
      const exec = (async () => {
          try {
              return { value: await task() };
          } catch (error) {
              return { error }
          } finally {
              taskMeta.done = true;
          }
      })();
      let taskMeta = { exec, done: false };
      executing.push(taskMeta);
      results.push(exec);
      
      if (executing.length >= batchSize) {
      await Promise.race(executing.map(({ exec }) => exec));
      executing = executing.filter(({done}) => !done);
      }
  }
  
  return await Promise.all(results);
  }