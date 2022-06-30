// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = false;
//     if (isCoffeeMakerReady) {
//         resolve("Kopi berhasil dibuat");
//     } else {
//         reject("Mesin kopi tidak bisa digunakan");
//     }
// }


// const makeCoffee = () => {
//     return new Promise(executorFunction);
// }
// const coffeePromise = makeCoffee();
// console.log(coffeePromise);

// Contoh 2 

// const stock = {
//     coffeeBeans: 300,
//     water: 1000,
// }

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//             resolve("Stok cukup. Bisa membuat kopi");
//         } else {
//             reject("Stok tidak cukup");
//         }
//     });
// };

// const handleSuccess = resolvedValue => {
//     console.log(resolvedValue);
// }

// const handleFailure = rejectionReason => {
//     console.log(rejectionReason);
// }

// // checkStock().then(handleSuccess, handleFailure);
// checkStock()
//     .then(handleSuccess)
//     .catch(handleFailure);

// Contoh 3 

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

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();