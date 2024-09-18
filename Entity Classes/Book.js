const Rental = require('./Rental')

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.rentals = [];
    }

    rentTo(person, date) {
        const rental = new Rental(this, person, date);
        this.rentals.push(rental);
        person.rentals.push(rental);
    }

    getRentals() {
        return this.rentals;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    setTitle(title) {
        this.title = title;
    }

    setAuthor(author) {
        this.author = author;
    }

}

module.exports = Book;