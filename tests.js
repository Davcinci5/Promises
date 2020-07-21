

if(typeof window === "undefined"){
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
                    // body = JSON.parse(body);
                    });
                res.on("error", (e) => {
                    reject(e)
                    // body = JSON.parse(body);
                    });
                });
        })
    }
}

fetch("https://jsonplaceholder.typicode.com/posts/1").then(v=>JSON.parse(v)).then(console.log)