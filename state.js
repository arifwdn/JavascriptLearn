const coffeeStock = {
    arabica: 100,
    robusta: 59,
    liberica: 80
}
const isCoffeeMachineReady = true;

// module.exports =  coffeeStock; export 1 nilai
// module.exports = { coffeeStock, isCoffeeMachineReady }; Import banyak data
// export default coffeeStock; 1 nilai
export { coffeeStock, isCoffeeMachineReady }; // Export banyak data