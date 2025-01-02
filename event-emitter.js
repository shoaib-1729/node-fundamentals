// built-in event module in nodejs

// import PizzaShop class
const PizzaShop = require("./pizza-shop")

// import drink machine
const DrinkMachine = require("./drink-machine")

// instance of DrinkMachine class
const drinkMachine = new DrinkMachine()

// create an instance of the class
const pizzaShop = new PizzaShop()

// event-listeners
pizzaShop.on("order", (size, topping) => {
    console.log(`Ordered Received! Baking a ${size} pizza with ${topping}...`);
    // using drink machine class for serving drink based on size
    drinkMachine.serveDrink(size)
})

pizzaShop.order("large", "mushrooms")
pizzaShop.displayOrderNumber()

// calling utilities of the PizzaShop class
// pizzaShop.order()
// pizzaShop.displayOrderNumber()



// // event module returns a class
// const EventEmitter = require("node:events")
//     // event object from class
// const emitter = new EventEmitter()

// // custom events
// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Ordered Received! Baking a ${size} pizza with ${topping}...`);
// })

// // multiple listeners on the same event can be there as well 
// emitter.on("order-pizza", (size) => {
//     if (size === "large") {
//         console.log(`Serving complimentary drink!`);
//     }
// })

// // register custom events, these arguments are automatically received by the callback function when the event is triggered
// emitter.emit("order-pizza", "large", "mushrooms")tomatically received by the callback function when the event is triggered
// emitter.emit("order-pizza", "large", "mushrooms")