const { addQuestion, saveContact } = require('./contacts');

const mainFunc = async () => {
    const nama = await addQuestion('Masukkan nama Anda : ');
    const email = await addQuestion('Masukkan alamat email Anda : ');
    const telp = await addQuestion('Masukkan nomor telepon Anda : ');

    saveContact(nama, email, telp);
} 

mainFunc();




 