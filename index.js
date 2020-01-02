const http = require('http');
const fs = require('fs');

const madlib = fs.readFileSync('./madlib.html', 'utf8');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/html'
    })

    const reqUrl = req.url.slice(1);
    let content = madlib.replace("***NAME***", reqUrl);
    res.end(content);
});

server.listen(3001, () => {
    console.log("Listening on port 3001")
});