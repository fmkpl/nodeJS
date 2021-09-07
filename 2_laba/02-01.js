var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    const fname = 'pic.png';
    let png = null;

    if(request.url==='/') {
        fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
            if(err) {
                throw err;
            }
            console.log('/home');
            response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            response.end(data);
        });
    }
    if(request.url==='/html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if(err) {
                throw err;
            }
            console.log('/html');
            response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            response.end(data);
            
        });
    }
    if(request.url==='/png') {
        fs.stat(fname, (err, stat) => {
            if(err){
                throw err;
            }
            else {
                console.log('/png');
                png = fs.readFileSync(fname);
                response.writeHead(200, {'Content-Type':'image/png', 'Content-Length': stat.size});
                response.end(png,'binary');
            }
        });
    }
    if(request.url==='/api/name') {
        console.log('/api/name');
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end('Efim Igorevich');
    }
    if(request.url==='/xmlhttprequest') {
        fs.readFile(path.join(__dirname, 'xmlhttprequest.html'), (err, data) => {
            if(err) {
                throw err;
            }
            console.log('/xmlhttprequest');
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    }
    if(request.url==='/fetch') {
        fs.readFile(path.join(__dirname,'fetch.html'), (err, data) => {
            if(err) {
                throw err;
            }
            console.log('/fetch');
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }
    if(request.url==='/jquery') {
        fs.readFile(path.join(__dirname, 'jquery.html'), (err, data) => {
            if(err) {
                throw err;
            }
            console.log('/jquery');
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }
}).listen(5000);

console.log('Server running at http://localhost:5000');