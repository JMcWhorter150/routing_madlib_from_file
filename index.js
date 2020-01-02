const http = require('http');
const fs = require('fs');

const madlib = fs.readFileSync('./madlib.html', 'utf8');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/html'
    })

    const reqUrl = req.url.split('/');
    let content = madlib.replace("***NAME***", reqUrl[1]);
    if (reqUrl.length === 3) {
        content = content.replace("***PLACE***", reqUrl[2]);
    }
    res.end(content);
});

server.listen(3001, () => {
    console.log("Listening on port 3001")
});