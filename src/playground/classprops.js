class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `OLD: Hi. My name is ${this.name}`;
    }
}


const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());
//cannot do this;
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
    name = 'newClass';
    getGreeting = () => {
        return `NEW: Hi. My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax)

const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());