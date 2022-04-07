const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello World!') // send respond secara normal
    // res.json({
    //     nama: "Agus",
    //     email: "agus@gmail.com",
    //     noTelp: "089877776666",
    // }); // send respond json
    res.sendFile('./index.html', { root: __dirname });
}); 

app.get('/about', (req, res) => {
    res.send('This is about page');
})

app.get('/contact', (req, res) => {
    res.send('Thos is contact page');
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1 align="center">404 Page not found</h1>');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
















// const http = require('http');
// const port = 3000;
// const fs = require('fs');

// http
// .createServer((req, res) => {
//     const url = req.url;
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     });

//     const renderHTML = (path, res) => {
//         fs.readFile(path, (err, data) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.write('Error file not found');
//             } else {
//                 res.write(data);
//             }
//             res.end();
//         });
//     }

//     if ( url === '/about' ) {
//         renderHTML('./about.html', res);
//     } else if ( url === '/contact' ) {
//         renderHTML('./contact.html', res);
//     } else {
//         renderHTML('./index.html', res);
//     }
    
// })
// .listen(port, () => {
//     console.log(`Server is listening on port ${port}...`);
// })