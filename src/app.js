

import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp'


//ReactDOM.render(jsx, document.getElementById('app'))
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))



class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }
}


const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
    name = 'newClass';
}
const newSyntax = new NewSyntax();
console.log(newSyntax)