const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'expressdb';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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
    db.collection('mahasiswa').find().toArray((err, result) => {
        if (err) {
            return console.log(err);
        }

        console.log(result);
    });
});



