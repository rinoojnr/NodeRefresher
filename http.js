const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Welcome to node.js');
    } 
    else if(req.url === '/about') {
        res.write('This is about page');
    } else res.write('<h1>Oops</h1><b><a href ="/">Back</a>');
    res.end();
    // res.end(`<h1>Oops</h1><b><a href ="/">Back</a>`);
});

server.listen(3000)