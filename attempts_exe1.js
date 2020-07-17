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

//Attemp 5
function runBatches(tasks,numberBtaches){
  
  return new Promise(async(res) =>{
    let arre = [];

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
    let arreToSolved = [];

    for(let i=0;i<tasks.length;i+=numberBtaches){
      for(let j=i;j<(i+numberBtaches);j++){
           if(j<tasks.length)arreToSolved.push(doneTasks.next());
         }
      let values = await Promise.all(arreToSolved);

      values.forEach(({value})=>{
        arre.push({value});
        if(arre.length === tasks.length) res(arre)
      })

      arreToSolved = [];
    }
  });
}
///attemp 4
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


//attemp 3
function resolverPromises(tasks,numberBtaches){

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

resolverPromises(tasks6,2).then(console.log)


///////////////
//attempt 2
function runBatches(tasks,batch_size){
    return new Promise( res =>{
      let array = [],
      index = 0;
      
      function recursivePromise(){
        if(index === tasks.length){
          return;
        }
        tasks[index++]()
        .then(val =>{ 
          array.push({value :  val});
          if(array.length === tasks.length){
            res(array);
          }else{
            recursivePromise();
          }
        })
        .catch(e =>{ 
          array.push({value :  e })
          if(array.length === tasks.length){
            res(array);
          }else{
            recursivePromise();
          }
        } );
      }
      
      for(let i= 0;i<batch_size;i++){
        recursivePromise();
      }
    });
  }
  // runBatches(tasks6, 4).then(v => console.log(v));

      //attempt 1
      function runBatches(tasks,batch_size){
        return Promise.allSettled(tasks.map(task => task()))
                                  .then(arre => arre.map(val => ({value : val.value? val.value : val.reason })))
        }
        
        
        if (!Promise.allSettled) {
           Promise.allSettled = promises =>
             Promise.all(
               promises.map((promise) =>
                 promise
                   .then(value => ({
                     status: "fulfilled",
                     value,
                   }))
                   .catch(reason => ({
                     status: "rejected",
                     reason,
                   }))
               )
             );
         }
  
        ///
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

  function resolverPromises(tasks,numberBatches){
  
    return new Promise(res =>{

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
        let arre= [];
        let index=0;

        async function promises(){
          end = false;
          do{
            console.log("entro");
            let promise = await doneTasks.next();
            console.log("promise",promise);
            let {done,value} = promise;
            console.log("done,value",done,value)
            console.log("done in do ",done);
            if(done) {res(arre); return }; 
            end = done;
            arre[index++] = {value}
          }
          while(!end)
        }

        for(let i=0;i<numberBatches;i++){
          promises();
        }
      });
    }

    const taskFactorySample = (delay, resolve, val) => 
    () => new Promise((res, rej)=>setTimeout(resolve?res:rej,delay, val))

    const tasks6 = [
    taskFactorySample(1500,true, 1),
    taskFactorySample(1000,true, 2),
    taskFactorySample(5000,false, 'error'),
    taskFactorySample(2000,true, 4),
    taskFactorySample(1000,false, 'error'),
    taskFactorySample(1000,false, 'error'),
    ];    

function resolverPromises(tasks,numberBatches){
  
    return new Promise(res =>{

    function *generator(tasksN){
      for(let i=0;i<tasksN.length;i++) {
          yield  {task: tasksN[i],index:i};
      }
    }
    
    let doneTasks = generator(tasks);
    let arre= [];

    async function promises(){
      end = false;
      do{
        let {value,done} = doneTasks.next();
        if(done) {res(arre); return }; 
        let {task,index:i} = value; // end = done;
        try{
          let val = await task();
          console.log(val);
          arre[i] = val
        }catch(e){
          console.log(e);
          arre[i] = "error"
         }
      }
      while(!end)
    }

    for(let i=0;i<numberBatches;i++){
      promises();
    }
  })
}

resolverPromises(tasks6,2).then(console.log)