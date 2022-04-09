const fs = require('fs');

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

// ambil semua data contact data di json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    return contacts;
}

// cari contact berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    return contact;
}

// Menimpa/menuliskan file contacts.json dengan data bary
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}

// Menambahkan data contact baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContacts(contacts);
}


module.exports = { loadContact, findContact, addContact };