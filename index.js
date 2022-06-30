// const coffeeStock = require('./state'); Contoh 1 data saja
// const { isCoffeeMachineReady, coffeeStock } = require('./state'); Import Banyak data

// console.log(coffeeStock);
// console.log(`Mesin nyala ? = ${isCoffeeMachineReady}`);

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis");
//     }
// // }
// makeCoffee("robusta", 10);

// import coffeeStock from './state.js';

// const displayStock = stok => {
//     for (const type in stok) {
//         console.log(type);
//     }
// }

// displayStock(coffeeStock);

import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

console.log(stock);
console.log(`Mesin nyala ? = ${isCoffeeMachineReady}`);