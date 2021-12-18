const http = require('http');
const hostname = '127.0.0.1';
const port = 3000
const fs = require('fs');


const server = http.createServer((req, res) => {
    if(req.method == "GET"){
        if(req.url === '/'){
        res.statusCode = 200,
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Home Work 1</h1>');
        res.end();
        } else if (req.url === '/about'){
            const about = fs.readFileSync('./about.html');
                res.setHeader('Content-Type', 'text/html');
                res.write(about);
                res.end()
        } else if (req.url === '/index'){
            const index = fs.readFileSync('./index.html');
            res.setHeader('Content-Type', 'text/html');
            res.write(index);
            res.end()
        } else if (req.url === '/services') {
            const services = fs.readFileSync('./services.html');
                res.setHeader('Content-Type', 'text/html');
                res.write(services);
                res.end()
        } else if (req.url === '/json') {   
                res.setHeader('Content-Type', 'text/json');
                res.write('/json');
                res.end('check check json');   
        } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>ERROR 404</h1>')
                res.end('Not found =(')
            };
    
    } else if (req.method == "POST"){ 
                        res.setHeader('Content-Type', 'text/html');
                        res.write('<h1>Home Work 1</h1>');
                        res.end("POST");
    } else if (req.method == "PUT"){        
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Home Work 1</h1>');
    res.end("PUT");
    } else if (req.method == "DELETE"){        
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Home Work 1</h1>');
    res.end("DELETE");
    } else if (req.method == "PATCH"){        
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Home Work 1</h1>');
    res.end("PATCH");
};
});

server.listen(port, hostname, () => {
    console.log(`Сервер запущен http://${hostname}:${port}`)
});


