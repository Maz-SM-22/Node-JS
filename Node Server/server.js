const http = require('http'); 
const fs = require('fs');
const path = require('path');

const port = 3000;
const hostname = 'localhost';

// Create server
const server = http.createServer((req, res) => {
    let filePath = path.resolve('Resources/index.html');
    if (fs.existsSync(filePath)) {
        if (path.extname(filePath)==='.html') { 
            fs.createReadStream(filePath).pipe(res); 
        } else {
            res.write('<h1>Error 400: Bad Request</h1>'); 
            res.end(); 
        }
    } else {
        res.write(`<h1>Error 404: ${filePath} Not Found</h1>`); 
        res.end(); 
    }
}); 

// Config server listener 
server.listen(port, hostname, () => {
    console.log(`Server running on port: ${port} at http://${hostname}`); 
});