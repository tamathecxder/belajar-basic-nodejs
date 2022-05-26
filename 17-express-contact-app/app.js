const express = require('express');
const app = express();
const port = 3000;
const { loadContact } = require('./utils/contacts');
const { findContact } = require('./utils/contacts');
const expressLayouts = require('express-ejs-layouts');

// Menggunakan templating engine EJS
app.set('view engine', 'ejs');

// Third-party middleware
app.use(expressLayouts);

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
    const contacts = loadContact();

    res.render('contact', {
        layout: 'layouts/main-layout',
        title: "Contact page",
        contacts: contacts,
    });
})

app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);

    res.render('detail', {
        layout: 'layouts/main-layout',
        error: "Contact dengan nama tersebut tidak tersedia!",
        title: "Detail contact",
        contact: contact,
    });
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1 align="center">404 Page not found</h1>');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});