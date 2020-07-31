

function cancellableFetch(url){
    let cancelResponse,
         promise = new Promise((resolved,rejected) =>{
            if(typeof global !== "undefined"){
                const https = require("https");
                cancelResponse = https.get(url, res => {
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
            }else{
                cancelResponse = new XMLHttpRequest();
                            xhr.open("GET", url);
                            xhr.send();
                            xhr.addEventListener('loadend',event =>{
                                resolved(event.srcElement.responseText);
                            });
                            xhr.addEventListener('abort', () =>{
                                rejected("mission aborted");
                            });      
                }
         });

         promise["cancel"] = () => cancelResponse.abort();
        return promise;
}
module.exports = cancellableFetch;


// const result = cancellableFetch("https://jsonplaceholder.typicode.com/comments");
// result.then(response => response.json())
//   .then(json => console.log(json)).catch(console.log);

//   result.cancel();
