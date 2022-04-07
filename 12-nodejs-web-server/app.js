const http = require('http');
const port = 3000;
const fs = require('fs');

http
.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    const renderHTML = (path, res) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error file not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }

    if ( url === '/about' ) {
        renderHTML('./about.html', res);
    } else if ( url === '/contact' ) {
        renderHTML('./contact.html', res);
    } else {
        renderHTML('./index.html', res);
    }
    
})
.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})