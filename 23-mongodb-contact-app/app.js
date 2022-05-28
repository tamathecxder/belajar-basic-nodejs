const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Homepage
app.get("/", (req, res) => {
  const pegawai = [
    {
      nama: "Ajun Bagas",
      email: "ajunbagas@gmail.com",
    },
    {
      nama: "Sarah Apriliani",
      email: "sarahapr@gmail.com",
    },
    {
      nama: "Gustav Kennedy",
      email: "gustavken@gmail.com",
    },
  ];

  res.render("index", {
    layout: "layouts/main-layout",
    title: "Homepage",
    email: "ujangs@yandex.com",
    pegawai: pegawai,
  });

  app.get("/about", (req, res) => {
    res.render("about", {
      layout: "layouts/main-layout",
      title: "About page",
    });
  });

  app.get("/contact", (req, res) => {
    const contacts = loadContact();

    res.render("contact", {
      layout: "layouts/main-layout",
      title: "Contact page",
      contacts: contacts,
      msg: req.flash("msg"),
    });
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
});
