const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');

// Menggunakan templating engine EJS
app.set('view engine', 'ejs');

// Third-party middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Application-level middleware
app.use((req, res, next) => {
    console.log('Time: ' + Date.now());
    next();
})

// Built-in middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    const pegawai = [
        {
            nama: "Ajun Bagas",
            email: "ajunbagas@gmail.com"
        },
        {
            nama: "Sarah Apriliani",
            email: "sarahapr@gmail.com"
        },
        {
            nama: "Gustav Kennedy",
            email: "gustavken@gmail.com"
        }
    ];

    res.render('index', {
        layout: 'layouts/main-layout',
        title: "Homepage",
        email: "ujangs@yandex.com",
        pegawai: pegawai
    });
}); 

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'About page',
    });
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: "Contact page",
    });
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`)
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1 align="center">404 Page not found</h1>');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});