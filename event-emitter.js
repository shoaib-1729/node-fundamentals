// built-in event module in nodejs
// event module returns a class
const EventEmitter = require("node:events")
    // event object from class
const emitter = new EventEmitter()

// custom events
emitter.on("order-pizza", (size, topping) => {
    console.log(`Ordered Received! Baking a ${size} pizza with ${topping}...`);
})

// multiple listeners on the same event can be there as well 
emitter.on("order-pizza", (size) => {
    if (size === "large") {
        console.log(`Serving complimentary drink!`);
    }
})

// register custom events, these arguments are automatically received by the callback function when the event is triggered
emitter.emit("order-pizza", "large", "mushrooms")