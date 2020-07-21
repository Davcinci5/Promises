
    if(typeof global !== undefined){
        const https = require("https");
        global.fetch = (url) =>{
            return new Promise((resolve,reject)=>{
                https.get(url, res => {
                        res.setEncoding("utf8");
                        let body = "";
                        res.on("data", data => {
                            body += data;
                        });
                        res.on("end", () => {
                            resolve(body)
                            });
                }).on("error", (e) => {
                    reject(e);
                });;
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

const urlQuery = (url) =>fetch(url);

   let counter_tries = 0;

   //attempt 2 
   module.exports =  function queryRetry(url,maxR,delay,delayInc){ 
       return new Promise(async (res,rej) =>{
           try{
               const data =  await urlQuery(url);
               delayInc = false;
               return res(data);
           }catch(e){ 
               counter_tries++;
               if(counter_tries < maxR){
                   if(delayInc){
                       let nextDel = delay +  (counter_tries * 100); 
                       setTimeout(() => res(queryRetry(url,maxR,delay,delayInc)),nextDel);   
                   }
               }else{
                   rej(`number of tries exceeded, times ${counter_tries}`)
               }
            }
       });
   }
   // function queryRetry(url,maxR,delay,delayInc){ attempt 1
// module.exports = function queryRetry(url,maxR,delay,delayInc){ 
//         return new Promise((res,rej) =>{
//             urlQuery(url).then(val=>{
//                 try{
//                     res(val.json());
//                 }catch(e){
//                     res(JSON.parse(val))
//                 }
//             })
//             .catch(e=>{ 
//                 counter_tries++;
//                 if(counter_tries < maxR){
//                     if(delayInc){
//                         let nextDel = delay +  (counter_tries * 100); 
//                         setTimeout(() => res(queryRetry(url,maxR,delay,delayInc)),nextDel);   
//                     }
//                 }else{
//                     rej(`number of tries exceeded, times ${counter_tries}`)
//                 }
//              })
//         });
// }

// queryRetry("https://jsonplaceholder.typicode.com/users", maxRetry, delay, delayIncrement)
//    .then(console.log)//handleSuccess
//    .catch(console.log);//handleErrorOrMaxRetryExceeded
