const Person = require('./Person');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Book = require('./Book');
const Rental = require('./Rental');

class App {
    constructor() {
        this.books = [];
        this.persons = [];
    }

    getPersons() {
        return this.persons;
    }

    getBooks() {
        return this.books;
    }

    createBook(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
    }

    createStudent(name, age, parentPermission) {
        const student = new Student(name, age, parentPermission, null);
        this.persons.push(student);
    }

    createTeacher(name, age, specialization) {
        const teacher = new Teacher(name, age, specialization);
        this.persons.push(teacher);
    }

    createRental(date, bookIndex, personIndex) {
        const rental = new Rental(this.books[bookIndex], this.persons[personIndex], date);
        return rental
    }

    getRentalById(personId) {
        const person = this.persons.find((borrowedPerson) => borrowedPerson.getId() === personId);
        return person ? person.getRentals() : []
    }

}

module.exports = App;