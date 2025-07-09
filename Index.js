const http = require('http');  // Import Node.js http module
const fs = require('fs');      // Import Node.js file system module

const server = http.createServer((req, res) => {
    if (req.url === '/') {  //req.url always begins with /.
        res.write("This is the Home page");
        res.end();
    } else if (req.url === '/login' && req.method === 'GET') {  //This when we have route '/login'
        fs.readFile(__dirname + '/login.html', 'utf-8', (err, data) => {
            if (!err) {
                res.write(data);
                res.end();
            }
        });
    }else if(req.url=='/login' && req.method==='POST'){   //This when we have route /login and we fill login details and then POST
        let body=''                                        // Request serve
        req.on('data',(chunk)=>{
            body+=chunk.toString()
        })
        req.on('end',()=>{
            console.log(body)
        })
    } 
    else {
        res.write("404 Not Found..")
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server Started on port 3000");
});
