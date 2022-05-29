const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// Validator
const { body, validationResult, check } = require("express-validator");

// connect ke database
require("./utils/db");

// models
const Contact = require("./model/contact");

// Flash message
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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

  app.get("/contact", async (req, res) => {
    // Menggunakan promise, tapi datanya belum tampil sempurna
    // Contact.find.then((contact) => {
    //   res.send(contact)
    // });

    const contacts = await Contact.find();

    res.render("contact", {
      layout: "layouts/main-layout",
      title: "Contact page",
      contacts: contacts,
      msg: req.flash("msg"),
    });
  });

  // Halaman form add data contact
  app.get("/contact/add", (req, res) => {
    res.render("add-contact", {
      layout: "layouts/main-layout",
      title: "Form tambah data contact",
    });
  });

  // Proses tambah data contact
  app.post(
    "/contact",
    [
      body("nama").custom((value) => {
        const duplicate = checkDuplicate(value);
        if (duplicate) {
          throw new Error(
            "Nama contact sudah tersedia, harap gunakan nama lain!"
          );
        }

        return true;
      }),
      check("email", "Alamat email tidak valid!").isEmail(),
      check("telp", "Nomor telepon tidak valid!").isMobilePhone("id-ID"),
    ],
    (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array() });
        res.render("add-contact", {
          layout: "layouts/main-layout",
          title: "Form tambah data contact",
          errors: errors.array(),
        });
      } else {
        addContact(req.body);
        // Kirimkan flash message
        req.flash("msg", "Data contact berhasil ditambahkan");
        res.redirect("/contact");
      }
    }
  );

  // Halaman detail contact
  app.get("/contact/:nama", async (req, res) => {
    const contact = await Contact.findOne({ nama: req.params.nama });

    res.render("detail", {
      layout: "layouts/main-layout",
      error: "Contact dengan nama tersebut tidak tersedia!",
      title: "Detail contact",
      contact: contact,
    });
  });

  // Halaman form add data contact
  app.get("/contact/add", (req, res) => {
    res.render("add-contact", {
      layout: "layouts/main-layout",
      title: "Form tambah data contact",
    });
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
});
