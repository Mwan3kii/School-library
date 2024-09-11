const Nameable = require("./Nameable");
const CapitalizeDecorator = require("./CapitalizeDecorator");
const TrimmerDecorator = require("./TrimmerDecorator");

class Person extends Nameable {
    constructor (age, name='unknown', parent_permission=true) {
        // Instance variables 
        super()
        this.id = Math.floor(Math.random() * 1000) + 1,
        this.name = name;
        this.age = age; 
        this.parent_permission = parent_permission
    }

    get getId(){
        return this.id;
    }

    get getName(){
        return this.name;
    }

    getAge() {
        return this.age;
    }

    set setName(name) {
        this.name = name;
    }

    set setAge(age) {
        this.age = age;
    }

    // Private method for age
    #of_age() {
        return this.age >= 18;
    }

    correctName() {
        return this.name
    }

    // Public function to check if person instance can use the services in the system.
    can_use_service(){
        return this.#of_age() || this.parent_permission;
    }

}

const person = new Person(22, 'maximilianus')
person.correctName;
const capitalized_person = new CapitalizeDecorator(person);
console.log(capitalized_person.correctName);
const capitalized_trimmed_person = new TrimmerDecorator(capitalized_person);
console.log(capitalized_trimmed_person.correctName);

module.exports = Person;
