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

module.exports = cancellableFetch;

// const result = cancellableFetch("https://jsonplaceholder.typicode.com/comments");

// result.then(response => response.json())
//   .then(json => console.log(json)).catch(console.log);

//   result.cancel();