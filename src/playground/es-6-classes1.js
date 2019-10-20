// Car 
// make
// model
// vin
// getDescription
// 

class Person {
    constructor(name = "Nameless", age = 0) {
        console.log(name)
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return "hi this is "+this.name;
        return `Hi this is ${this.name}`; // template strings
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let desc = super.getDescription();
        if (this.hasMajor()){
            desc = desc + ` and studying ${this.major}`;
        }
        return desc;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += ` lives in ${this.location}`;
        }
        return greeting;
    }
}

const p = new Student('Andrew Mead', 26, 'ComputerScience');
console.log(p);
console.log(p.getGreeting());
console.log(p.hasMajor());
console.log(p.getDescription());

const t = new Traveler('Madhav Rajan', 27, 'Boston')
console.log(t.getGreeting());

const p2 = new Person();
console.log(p2);