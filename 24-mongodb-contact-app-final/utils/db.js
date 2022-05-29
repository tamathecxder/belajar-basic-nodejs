const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/expressdb', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);



// // Menambah satu data kedalam model diatas
// const contact1 = new Contact({
//   nama: "Cillian Murphy",
//   nohp: "085655542158",
//   email: "sheesh@gmail.com"
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));

