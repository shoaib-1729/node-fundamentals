// pizza shop class
// class PizzaShop{
//     constructor() {
//         this.orderNumber = 0;
//     }

//     order() {
//         this.orderNumber++;
//     }

//     displayOrderNumber() {
//         console.log(`Current order number: ${this.orderNumber}`);
//     }
// }


// pizza shop class with event emitter features
// import event emitter
const EventEmitter = require("node:events")

class PizzaShop extends EventEmitter {
    constructor() {
        // Calls the constructor of EventEmitter, making PizzaShop an EventEmitter
        super()
            // Property of the PizzaShop instance
        this.orderNumber = 0;
    }

    order(size, topping) {
        this.orderNumber++;
        // this will point to the event object
        this.emit("order", size, topping)
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`);
    }
}


// export the class
module.exports = PizzaShop;