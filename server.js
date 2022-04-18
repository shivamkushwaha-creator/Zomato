const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
// const services = fs.readFileSync('custom/services.html');
// const about = fs.readFileSync('custom/about-us.html');
// const contact = fs.readFileSync('custom/contact-us.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end(home);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

