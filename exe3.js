function cancellableFetch(url){
    let handler = {};
    if(typeof global !== "undefined"){
        const https = require("https");
        let response;
        let promise =  new Promise((resolved,rejected)=>{
            response = https.get(url, res => {
                let chunks =[];
                res.on("data", data => {
                    chunks.push(data);
                });
                res.on("end", () => {
                    resolved(chunks.join(''));
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

        let xhr = new XMLHttpRequest();
            handler.then = function(cb){
                return new Promise((res,rej)=>{
                    xhr.open("GET", url);
                    xhr.send();

                    xhr.addEventListener('loadend',event =>{
                        res(event.srcElement.responseText);
                    });

                    xhr.addEventListener('abort', () =>{
                        rej("mission aborted");
                    })

                }).then(cb)
            };

            handler.cancel = function(){
                xhr.abort();
            };
        }
        return handler;
}

module.exports = cancellableFetch;


// const result = cancellableFetch("https://jsonplaceholder.typicode.com/comments");
// result.then(response => response.json())
//   .then(json => console.log(json)).catch(console.log);

//   result.cancel();