class Person {
    constructor (age, name='unknown', parent_permission=true) {
        // Instance variables 
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

    // Public function to check if person instance can use the services in the system.
    can_use_service(){
        return this.#of_age() || this.parent_permission;
    }

}



let x = new Person(20);










