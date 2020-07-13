const fetch = require('node-fetch');
 
const maxRetry = 1;
const delay = 1000;
const delayIncrement = true;
 
/**
* perform query successfully once or try up to a maximum of maxRetry times
* if unsuccessful, delay the next attempt for an amount of time. If attempts
* continue to fail then increase the delay between attempts if delayIncrements
* is set to true. 
*/

const urlQuery = (url) => fetch(url);

   let counter_tries = 0;

   module.exports = function queryRetry(url,maxR,delay,delayInc){
        return new Promise((res,rej) =>{
            urlQuery(url).then(val=>{
                res(val.json());
            })
            .catch(e=>{ 
                
                counter_tries++;
              
                if(counter_tries < maxR){
                    if(delayInc){
                        let nextDel = delay +  (counter_tries * 100); 
                        setTimeout(() => res(queryRetry(url,maxR,delay,delayInc)),nextDel);   
                    }
                }else{
                    rej(`number of tries exceeded, times ${counter_tries}`)
                }
             })
        });
}

// queryRetry('https://jsonplaceholder.typicode.com/todos/1', maxRetry, delay, delayIncrement)
//    .then(console.log)//handleSuccess
//    .catch(e => console.log(e));//handleErrorOrMaxRetryExceeded
