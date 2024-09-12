const Nameable = require("./Nameable");

class Decorator extends Nameable {
    constructor(nameable) {
        super();
        this.nameable = nameable;
    }

    correctName() {
        return this.nameable.correctName();
    }
}

module.exports = Decorator;