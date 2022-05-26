// File System
const fs = require('fs');

// Readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// membuat folder data
const dirPath = './data';
if ( !fs.existsSync(dirPath) ) {
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika tidak ada
const filePath = './data/contacts.json';
if ( !fs.existsSync(filePath) ) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}

// Menulsikan file kedalam format json dengan metode promise dan async await
const addQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (nama) => {
            resolve(nama);
        }); 
    });
}

const saveContact =  (nama, email, telp) => {
    const contact = { nama, email, telp };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(`Terima kasih sudah menginputkan data! silakan coba lagi jika berkenan`);

    rl.close(); 
}

module.exports = { addQuestion, saveContact };

// const question2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Inputkan email address Anda : ', (email) => {
//             resolve(email);
//         }); 
//     });
// }
