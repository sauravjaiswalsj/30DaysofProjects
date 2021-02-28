//it is part of nodejs
const http = require('http');
const Port =3000;
//http has a method called createServer
//takes 1 agr
// has callback takes 2 args: req, res

const server = http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1> This is a Server</h1>');
    res.end();
});
//createServer returns an object with a listen method
server.listen(Port,()=>{
    console.log(`Server listening on: ${Port}`)
});