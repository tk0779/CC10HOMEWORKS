// Using Express
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello from Express")
})

app.get('/user', (req,res)=>{
    res.send("User page from Express")
});

app.listen(3000, () => console.log ('Express server starts..3000'))

//-------------------//
// Using HTTP request
const http  = require('http')
const server = http.createServer()

server.on ('request', (req,res) =>{
    if (req.url === '/')
    res.end("Hello from HTTP-NodeJS")

    if (req.url === '/user')
    res.end("User page from HTTP-NodeJS")
})
server.listen(8080, () =>console.log ('HTTP Server Starts .. 8080'))
