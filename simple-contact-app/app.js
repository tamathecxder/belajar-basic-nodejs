const yargs = require('yargs');
const contacts = require('./contacts');

// Command untuk menambah contact baru kedalam json
yargs.command({
    command: 'add',
    describe: 'Menambahkan data contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Alamat email',
            demandOption: false,
            type: 'string',
        },
        noTelp: {
            describe: 'Nomor telepon',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.saveContact(argv.nama, argv.email, argv.noTelp);
    }
}).demandCommand();

// Command untuk melihat seluruh daftar nama dan nomor handphone contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan seluruh data nama dan nomor telepon pada contact',
    handler() {
        contacts.listContact();
    }
})

// Command untuk menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail dari sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
})

// Command untuk menghapus sebuah contact
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
})




yargs.parse();