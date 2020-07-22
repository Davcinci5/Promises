function cancellableFetch(url){
    let handler = {};
    if(typeof global !== "undefined"){
        const https = require("https");
        let response;
        let promise =  new Promise((resolved,rejected)=>{
            response = https.get(url, res => {
                let json = "";
                res.on("data", data => {
                    json += data;
                });
                res.on("end", () => {
                    resolved(json);
                });
            }).on("abort",() =>{
                rejected("mission aborted");
            })
        })

        handler.then = function(cb){
                   return promise.then(cb)
                }

        handler.cancel = function(){
            response.abort();
        }
    }else{
        let  controller = new AbortController();
           
            handler.then = function(cb){
                return fetch(url, { signal: controller.signal }).then(cb);
            };

            handler.cancel = function(){
                controller.abort();
            };
        }
        return handler;
}

module.exports = cancellableFetch;


// const result = cancellableFetch("https://jsonplaceholder.typicode.com/comments");
// result.then(response => response.json())
//   .then(json => console.log(json)).catch(console.log);

//   result.cancel();