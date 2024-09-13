const readlineSync = require('readline-sync');

//import the App class
const App = require('./Entity Classes/app');
const Teacher = require('./Entity Classes/Teacher');

const app = new App();

// Function to list all books
function libBooks(app) {
    if(app.getBooks().length === 0) {
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
    }else {
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

// Create Rental
// function createRental(app){
//     const bookIndex = 
// }

