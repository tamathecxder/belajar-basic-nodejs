// Synchronous 

// const getUserSync = (id) => {
//     // let name = '';
//     const name = id === 1 ? 'Budi' : 'Joko';

//     return { id, name };
// }

// const firstUser = getUserSync(1);
// console.log(firstUser);

// const secondUser = getUserSync(2);
// console.log(secondUser);

// const helloNode = 'Hello Node JS';
// console.log(helloNode);


// Asynchronous
const getFoodOrder = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const name = id === 1 ? 'Nasi Goreng' : 'Teh Manis';

        callback({ id, name });
    }, time);
}

const firstUser = getFoodOrder(1, (result) => {
    console.log(result);
});

const secondUser = getFoodOrder(2, (result) => {
    console.log(result);
});

const askWifi = 'Apa password wifi-nya?';
console.log(askWifi);

