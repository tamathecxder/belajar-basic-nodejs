const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

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

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    return contacts;
}

const saveContact =  (nama, email, telp) => {
    const contact = { nama, email, telp };
    const contacts = loadContact();

    const duplicate = contacts.find((contact) => contact.nama === nama);

    if ( duplicate ) {
        console.log(chalk.bgRed.black.bold('Contact sudah terdaftar, harap coba lagi'));
        return false;
    }

    if ( email ) {
        if ( !validator.isEmail(email) ) {
            console.log(chalk.bgRed.black.bold('Email tidak valid, harap masukkan email yang sesuai!'));
            return false;
        }
    }

    if ( !validator.isMobilePhone(telp, 'id-ID') ) {
        console.log(chalk.bgRed.black.bold('Nomor telepon tidak valid, cek kembali apakah nomor telepon Anda itu sesuai dengan ketentuan!'));
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(chalk.green.inverse.bold(`Terima kasih sudah menginputkan data! silakan coba lagi jika berkenan`));
}

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.blue.inverse(`DAFTAR CONTACT :`));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.telp}`);
    });
}

const detailContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if ( !contact ) {
        console.log(chalk.bgRed.black.bold(`${nama} tidak ditemukan!`));
        return false;
    }
    
    console.log(chalk.black.bgCyan(`${contact.nama}`));
    console.log(`${contact.telp} :`);
    if ( contact.email ) {
        console.log(`${contact.email} :`);
    }
} 

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

    if ( contacts.length === newContacts.length ) {
        console.log(chalk.bgRed.black.bold(`${nama} tidak ditemukan!`));
        return false;
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));

    console.log(chalk.bgGreen(`Data contact berhasil dihapus!`));
}   

module.exports = { listContact, detailContact, deleteContact, saveContact };