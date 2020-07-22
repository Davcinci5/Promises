const https = require('https');

const req = https.get("https://jsonplaceholder.typicode.com/todos", res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        console.log("deleted request",body);
    });
    
});

req.on("error", (e) => {
console.log("req, rejected");
});

req.on("abort",() =>{
    console.log("aborted mission gg")
})

req.abort();

const controller = new AbortController();
const errorHandler = err => {
    if (err.name === 'AbortError') {
    return new Promise((res,rej)=> rej('aborted Promise'))
    }
}
return{
    then:function(cb){
        return fetch(url, { signal: controller.signal }).then(cb,errorHandler);
    },
    cancel:function(){
        controller.abort();
    }
}
}


const AbortController = require('abort-controller');
const fetch = require('node-fetch');

function cancellableFetch(url){
    const controller = new AbortController();
    const errorHandler = err => {
        if (err.name === 'AbortError') {
        return new Promise((res,rej)=> rej('aborted Promise'))
        }
    }
    return{
        then:function(cb){
            return fetch(url, { signal: controller.signal }).then(cb,errorHandler);
        },
        cancel:function(){
            controller.abort();
        }
    }
}


//////////HERE MY CODE BEGINS
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
                    resolved(body);
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

