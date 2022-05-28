const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000;

// Homepage
app.get('/', (req, res) => {
  const mahasiswa = [
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

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`)
});





