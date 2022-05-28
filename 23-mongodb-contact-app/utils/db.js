const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/expressdb', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

// Membuat Schema
const Contact = mongoose.model('Contact', {
  nama: {
    type: String,
    required: true,
  },
  nohp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  }
});

// Menambah satu data kedalam model diatas
const contact1 = new Contact({
  nama: "Anjani Permana",
  nohp: "089877776787",
  email: "anjaniperma@gmail.com"
});

// Simpan ke collection
contact1.save().then((contact) => console.log(contact));

