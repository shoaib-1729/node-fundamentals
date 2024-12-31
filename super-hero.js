class Superhero {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name
    }
}


// export instance of the class
// module.exports = new Superhero("Batman")

// export class (if want to create different instances of the class in another module)
module.exports = Superhero;