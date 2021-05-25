console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info() {
      console.log(`Name: ${this.name}`);
      console.log(`Pets: ${this.pets}`);
      console.log(`Residence: ${this.residence}`);
    }

    soundOff() {
      console.log("HERE!!!")
    }

    greeting(){
        console.log("Hello fellow person!");
    }
}

class Coder extends Person {
    constructor(occupation, name, pets, residence, hobbies){        
        super(name, pets, residence, hobbies);
        this.occupation = occupation;        
    }
    greeting(){
        console.log("A custom greeting from a coder");
    }
}
let z = ["1", "2", "3"]

let x = new Person("John Doe", 1, "123 Main street", z);
for (const prop in x) {
    if (Object.hasOwnProperty.call(x, prop)) {
        const element = x[prop];
        console.log(element);   
    }
}
x.info();
x.soundOff();
x.greeting();

let y = new Coder("Jane Doe", 2, "456 Little Lane", z);

for (const prop in y) {
    if (Object.hasOwnProperty.call(y, prop)) {
        const element = y[prop];
        console.log(element);
    }
}
y.info();
y.soundOff();
y.greeting();

