console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name,
        this.pets = pets,
        this.residence = residence,
        this.hobbies = hobbies
    }

addHobby(hobby) {
    this.hobbies.push(hobby);
}

removeHobby(notHobby) {
    let index = this.hobbies.indexOf(notHobby);
    this.hobbies.splice(index, 1);
}

 greeting() {
    console.log ("Hello fellow person!");
 } 
};



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets,residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer"
    }

    greeting() {
        console.log("Hello fellow coder!");
    }
};



// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let personObj = new Person("Halli", 4, "Hunsville, AL", ["sewing", "photography", "thrifting", "video games"]);

// personObj.addHobby("thrifting");
// console.log(personObj);

// personObj.removeHobby("thrifting");
// console.log(personObj);

let coderObj = new Coder("Halli", 4, "Hunsville, AL", ["sewing", "photography"]);



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    result = 0;

    add(a, b) {
        let oneVal;
        if(b == undefined) {
            oneVal = this.result + a;
            } else {
                oneVal = a + b;
            }

        this.result = oneVal;
        return this.result;
    }

    subtract(a, b) {
        let oneVal;
        if(b == undefined) {
            oneVal = this.result - a;
            } else {
                oneVal = a - b;
            }

        this.result = oneVal;
        return this.result;
    }

    multiply(a, b) {
        let oneVal;
        if(b == undefined) {
            oneVal = this.result * a;
            } else {
                oneVal = a * b;
            }

        this.result = oneVal;
        return this.result;
    }
    divide(a, b) {
        let oneVal;
        if(b == undefined) {
            oneVal = this.result / a;
            } else {
                oneVal = a / b;
            }

        this.result = oneVal;
        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }
};

let calOne = new Calculator();
console.log(calOne.multiply(4));