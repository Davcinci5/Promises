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

