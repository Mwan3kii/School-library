const Person = require("./Person");

class Student extends Person {
    constructor (name, age, parent_permission, classRoom) {
        super(age, name, parent_permission);
        if(classRoom && classRoom.getStudents) {
            this.classRoom = classRoom;
            this.classRoom.addStudent(this);
        }
    }

    setClassroom(classRoom){
        this.classRoom = classRoom;
        if(!classRoom.getStudents().includes(this)) {
            classRoom.addStudent(this);
        }
    }

    play_hooky () {
        return "¯\(ツ)/¯";
    }
}

module.exports = Student;

/**
 * let student = new Student('nnn', 56, true)
 * 
 * addStudents({name:'nnn', age:56, })
 * 
 */