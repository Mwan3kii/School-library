const Decorator = require("./Decorator");

class CapitalizeDecorator extends Decorator{
    correctName() {
        return this.nameable.correctName().toUpperCase();
    }    
}

module.exports = CapitalizeDecorator;