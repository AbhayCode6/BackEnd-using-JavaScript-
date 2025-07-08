const http = require('http');  // Import Node.js http module
const fs = require('fs');      // Import Node.js file system module

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("This is the Home page");
        res.end();
    } else if (req.url === '/login' && req.method === 'GET') {
        fs.readFile(__dirname + '/login.html', 'utf-8', (err, data) => {
            if (!err) {
                res.write(data);
                res.end();
            }
        });
    } else {
        res.write("404 Not Found..")
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server Started on port 3000");
});
