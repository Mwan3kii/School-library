const Decorator = require("./Decorator");

class TrimmerDecorator extends Decorator {
    correctName() {
        return this.nameable.correctName().slice(0, 9);
    }
}

module.exports = TrimmerDecorator;