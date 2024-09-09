import Person from "./Person";

class Student extends Person {
    constructor (name, age, parent_permission, classRoom) {
        super(age, name, parent_permission);
        this.classRoom = classRoom
    }

    play_hooky () {
        return "¯\(ツ)/¯";
    }
}
