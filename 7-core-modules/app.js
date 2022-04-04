// core module

// File System
const fs = require('fs');

// menuliskan string ke file (sycnronous)
// try {
//     fs.writeFileSync('data/test.txt', 'This is my first file write in core module on synchronous');
// } catch(error) {
//     console.log(error);
// }

// menuliskan string ke file (asycnrhonous)
// fs.writeFile('data/notes.txt', 'Hello World Async', (err) => {
//     console.log(err);
// });

// Read file secara syncronous
// const readData = fs.readFileSync('data/notes.txt', 'utf-8');
// console.log(readData);

// Read file secara asynchonous
// fs.readFile('notes.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// Readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// rl.question('Masukkan nama Anda : ', (nama) => {
//     rl.question('Masukkan umur Anda : ', (umur) => {
//         console.log(`Umur Anda ternyata ${umur} tahun, terimaksih sudah menjawab pertanyaan ini, ${nama}`);

//         rl.close()
//     })
    
// });

// Menuliskan file kedalam format json
rl.question('Inputkan nama Anda : ', (nama) => {
    rl.question('Inputkan nomor telepon Anda : ', (telp) => {
        const contact = { nama, telp };
        const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(fileBuffer);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log(`Terima kasih sudah menginputkan data! silakan coba lagi jika berkenan`);

        rl.close();
    });
})