class Rental {
    constructor(book, person, date) {
        this.book = book;
        this.person = person;
        this.date = date;

        book.getRentals().push(this);
        person.rentals.push(this);
    }

    getBook() {
        return this.book;
    }

    getPerson() {
        return this.person;
    }

    getDate() {
        return this.date;
    }

    setDate(date) {
        this.date = date;
    }
}