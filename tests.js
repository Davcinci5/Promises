let xhr = new XMLHttpRequest();
xhr.open("GET", 'https://jsonplaceholder.typicode.com/users');
xhr.send();

xhr.addEventListener('loadend',e =>{
    console.log(e.srcElement.responseText)
});

xhr.addEventListener('abort', () =>{
    console.log("mission aborted");
})

xhr.abort()