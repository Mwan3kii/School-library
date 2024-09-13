class Classroom {
    constructor(label) {
        this.label = label;
        this.students = [];
    }

    // Method to add a student to the classroom
    addStudent(student) {
        this.students.push(student);
        student.classRoom = this;
    }

    getStudents() {
        return this.students;
    }

    getLabel () {
        return this.label;
    }

    setLabel(label) {
        this.label = label
    }
}

module.exports = Classroom;

/**
 * let classData = new Classroom('rm5');
 * classData.addstudent('Robert');
 * 
 * Robert.classroom = {label: 'rm5', students: ['Agatha', 'Robert']}
 * 
 * 
 */