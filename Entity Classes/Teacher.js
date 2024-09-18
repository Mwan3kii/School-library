const Person = require("./Person");


class Teacher extends Person {
    constructor (name, age, parent_permission, specialization) {
        super(age, name, parent_permission);
        this.specialization = specialization
    }

    can_use_service () {
        return true;
    }
}

module.exports = Teacher;