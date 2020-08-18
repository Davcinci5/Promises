
    if(typeof global !== "undefined"){
        const https = require("https");
        global.fetch = (url) =>{
            return new Promise((resolve,reject)=>{
                https.get(url, res => {
                        let chunks = [];
                        res.on("data", data => {
                            chunks.push(data);
                        });
                        res.on("end", () => {
                            resolve(chunks.join(''));
                            });
                }).on("error", (e) => {
                    reject(e);
                });
            })
        }
    }


 
const maxRetry = 4;
const delay = 1000;
const delayIncrement = true;
 
/**
* perform query successfully once or try up to a maximum of maxRetry times
* if unsuccessful, delay the next attempt for an amount of time. If attempts
* continue to fail then increase the delay between attempts if delayIncrements
* is set to true. 
*/

const urlQuery = (url) => () => fetch(url);


//attempt 5
async function queryRetry(cbFetch,maxR,delay,delayInc){ 
    let counter_tries = 1;
        while(counter_tries < maxR){
            try{
                const data =  await cbFetch();
                return data;
            }catch(e){ 
                    if(delayInc) delay=+(counter_tries++ * 100)
                    await new Promise(res => setTimeout(res,delay))   
            }
        }
        throw new Error(`number of tries exceeded, times ${counter_tries}`);

   }

   module.exports = {queryRetry, urlQuery }


queryRetry("https://jsonplaceholder.typicode.com/users", maxRetry, delay, delayIncrement)
   .then(console.log)//handleSuccess
   .catch(console.log);//handleErrorOrMaxRetryExceeded


////********************************************************************* */


//module.exports = queryRetry;