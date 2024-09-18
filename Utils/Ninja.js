class Ninja {
    constructor(name) {
        this.name = name;
        this.stars = 10;
    }

    sneaky() {
        console.log("Sneaky Ninja!!");
    }
}


//Decorator function
const flyingNinja = (ninja) => {
    ninja.fly = () => {console.log('Flying');
    }
}

const robert = new Ninja("Robert");
const agatha = new Ninja("Agatha");

console.log(robert);
console.log(agatha);


// Applying Decoration
flyingNinja(agatha);
agatha.fly();