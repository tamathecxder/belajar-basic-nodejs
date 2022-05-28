const { MongoClient } = require("mongodb");
let mongo = require("mongodb");
const ObjectID = mongo.ObjectID;

const uri = "mongodb://127.0.0.1:27017";
const dbName = "expressdb";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) {
    return console.log(err);
  }

  // pilih database
  const db = client.db(dbName);

  // menambahkan 1 data ke collection mahasiswa
  // db.collection('mahasiswa').insertOne({
  //     nama: 'Maulana',
  //     email: 'maulana@gmail.com'
  // }, ((err, result) => {
  //     if (err) {
  //         return console.log(err);
  //     }

  //     console.log(result.ops);
  // }));

  // menambahkan lebih dari 1 data ke collection mahasiswa
  // db.collection('mahasiswa').insertMany([
  //     {
  //         nama: 'Erik',
  //         email: 'erik@gmail.com',
  //     },
  //     {
  //         nama: 'Maulana',
  //         email: 'maulana@gmail.com'
  //     }
  // ], ((err, result) => {
  //     if (err) {
  //         return console.log(err);
  //     }

  //     console.log(result.ops);
  // }));

  // menampilkan semua data yang ada didalam collection mahasiswa
  // db.collection('mahasiswa').find().toArray((err, result) => {
  //     if (err) {
  //         return console.log(err);
  //     }

  //     let hasil = result.map(mhs => {
  //         return {
  //             nama: mhs.nama,
  //             email: mhs.email
  //         }
  //     });

  //     console.log(hasil);
  // });

  // menampilkan data berdasarkan kriteria tertentu
  // db.collection('mahasiswa').find({ nama: "Erik" }).toArray((err, result) => {
  //     if (err) {
  //         return console.log(err);
  //     }

  //     console.log(result);
  // });

  // mengubah data berdasarkan id dan menyelesaikan promise nya
  // const updatePromise = db.collection('mahasiswa').updateOne(
  //     {
  //         _id: ObjectID('628f6e9061f9c621fc7ac95a')
  //     },
  //     {
  //         $set: {
  //             email: "ahmaddd@yahoo.com"
  //         }
  //     }
  // )

  // updatePromise
  //     .then((result) => { console.log(result) })
  //     .catch((err) => { console.log(err) });

  // mengubah banyak data dan dengan kriteria namanya Anjime
  // db.collection('mahasiswa').updateMany(
  //     {
  //         nama: "Rizki"
  //     },
  //     {
  //         $set: {
  //             nama: "Erik Anjime"
  //         },
  //     }
  // );

  // menghapus data berdasarkan id
  //   db.collection("mahasiswa")
  //     .deleteOne({
  //       _id: ObjectID("628f6e9061f9c621fc7ac95a"),
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // menghapus beberapa data sekaligus berdasarkan id
  db.collection('mahasiswa').deleteMany(
    {
      nama:  "Erik Anjime"
    }).then((result) => {
      console.log(result)
    }).catch(err => { console.log(err) })

});
