const readlineSync = require('readline-sync');

//import the App class
const App = require('./Entity Classes/app');
const Teacher = require('./Entity Classes/Teacher');
const Student = require('./Entity Classes/Student');

const app = new App();

// Function to list all books
function libBooks(app) {
    if (app.getBooks().length === 0) {
        console.log("You have not added any books yet.");
    } else {
        app.getBooks().forEach(book => {
            console.log(`Title: "${book.title}", Author: "${book.author}"`);
        });
    }
}

function libPersons(app) {
    if (app.getPersons().length === 0) {
        console.log("You have not added any persons yet.");
    } else {
        app.getPersons().forEach(person => {
            let type = 'Person';
            if (person instanceof Student) {
                type = 'Student';
            } else if (person instanceof Teacher) {
                type = 'Teacher';
            }
            console.log(`${type} Name: "${person.name}", ID: "${person.getId()}", Age: "${person.age}"`);
        });
    }
}


function createStudent(app) {
    const age = readlineSync.question('Age: ');
    const name = readlineSync.question('Name: ');
    const parentPermission = readlineSync.question('Has parent permission? [Y/N]').toUpperCase();
    app.createStudent(name, parseInt(age), parentPermission === 'Y');
    console.log('Student created successfully!!');
}

function createTeacher(app) {
    const age = readlineSync.question('Age: ');
    const name = readlineSync.question('Name: ');
    const specialization = readlineSync.question('Specialization: ');
    app.createTeacher(name, parseInt(age), specialization);
    console.log('Teacher created successfully!!');
}

// Function to handle inputs for a valid person
function validateInput(user, app) {
    if (user === '1') {
        createStudent(app);
    } else if (user === '2') {
        createTeacher(app);
    }
}

// Function to create a person
function createPerson(app) {
    const userInput = readlineSync.question('Do You want to create (1) student / (2) teacher? [input the number]: ');
    validateInput(userInput, app);
}

function createBook(app) {
    const title = readlineSync.question('Title: ');
    const author = readlineSync.question('Author: ');
    app.createBook(title, author);
    console.log('Book created successfully!!');
}

// Create a function to get the book index
function acceptBookIndex(app) {
    console.log('Select a book from the following list: ');
    app.getBooks().forEach((book, index) => {
        console.log(`${index}) Title: ${book.title}, Author: ${book.author}`);
    });

    let bookIndex = parseInt(readlineSync.question('Enter Book Index: '));
    while (bookIndex < 0 || bookIndex >= app.getBooks().length) {
        bookIndex = parseInt(readlineSync.question('Please enter a valid book index: '));
    }

    return bookIndex;
}

//Function to accept person index
function personIndexValue(app) {
    console.log('Select the person renting a book: ');
    app.getPersons().forEach((person, index) => {
        const personType = person instanceof Student ? 'Student' : 'Teacher';
        console.log(`${index}) [${personType}] Name: ${person.name} ID: ${person.getId()}, Age: ${person.age}`);
    })

    return parseInt(readlineSync.question('Enter the person index: '));
}

// Function to create a rental
function createRental(app) {
    const bookIndex = acceptBookIndex(app);
    const personIndex = personIndexValue(app);
    const date = readlineSync.question('Date: ');

    app.createRental(date, bookIndex, personIndex);
    console.log('Rental has been successfully created!');
}

// List the rentals for a given person based on ID
function listRentalsForPerson(app) {
    const personId = parseInt(readlineSync.question('Enter ID of a person: '));
    const rentals = app.getRentalById(personId);

    console.log('Rentals: ');
    rentals.forEach((rental) => {
        console.log(`Date: "${rental.getDate()}", Book: ${rental.getBook().title} by ${rental.getBook().author}`);

    })
}

function exitMessage() {
    console.log('Thank you for using the library app!');
}

// Define the available
const ACTIONS = {
    '1': {
        prompt: 'List all books',
        handler: libBooks
    },

    '2': {
        prompt: 'List all people',
        handler: libPersons
    },

    '3': {
        prompt: 'Create a person',
        handler: createPerson
    },

    '4': {
        prompt: 'Create a Book',
        handler: createBook
    },

    '5': {
        prompt: 'Create a rental',
        handler: createRental
    },

    '6': {
        prompt: 'List all rentals for a given person id',
        handler: listRentalsForPerson
    },

    '0': {
        prompt: 'Exit',
        handler: exitMessage
    },
}

function main(app) {
    console.log('Welcome to our School Library: ');
    while (true) {
        console.log(' ')
        Object.keys(ACTIONS).forEach((actionId) => {
            console.log(`${actionId} - ${ACTIONS[actionId].prompt}`);
        });

        const chosenId = readlineSync.question('Choose and option: ');

        if (ACTIONS[chosenId]) {
            ACTIONS[chosenId].handler(app);
            if (chosenId === '0') {
                break;
            }
        } else {
            console.log('Invalid option, choose correct one!')
        }
    }

}

main(app);