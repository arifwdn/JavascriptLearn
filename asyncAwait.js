const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 2;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }

// makeCoffee();
// Error handing async await
// async function makeCoffee() {
//     try {
//         const coffee = await getCoffee();
//         console.log(coffee);
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }

// makeCoffee();


//Async Await chaining promise
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    };
}

makeEspresso();