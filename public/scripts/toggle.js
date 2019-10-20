"use strict";

// babel  src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// yarn init
// yarn add babel-preset-react
// yarn add babel-preset-env
// yarn install to install dependencies
console.log('app.js is running');

// check this out on babel

// create a templateTwo var JSX expression
// div
//  h1 -> Andrew Mead
//  p -> Age:
// p -> Location: 
// Render templateTwo
var user = {
    "name": "Madhav",
    "age": 27,
    "location": "Boston"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            " Location: ",
            location
        );
    } else {
        return undefined; //getLocation()
    }
}

// const templateTwo = (
//     <div>
//         <h1> {user.name ? user.name : "Annonymous"}</h1>
//         {null}
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// JS true && 'Some age' would return 'Some age'
// JS false && 'Some age' would return false


var appRoot = document.getElementById('app');

var initialOptions = ["one", "two"];
var app = {
    "title": "Indecision App",
    "subtitle": "Learning React",
    "options": initialOptions
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log(e);
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var onMakeDecision = function onMakeDecision(e) {
    e.preventDefault();
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

var numbers = [55, 101, 1000];

var removeOptions = function removeOptions(e) {
    e.preventDefault();
    app.options = [];
    renderApp();
};

var renderApp = function renderApp() {

    // JSX -Javascript XML
    // reference function here (don't call it)
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { id: "sampleheader" },
            " ",
            app.title,
            " "
        ),
        React.createElement(
            "h6",
            null,
            app.subtitle && React.createElement(
                "p",
                null,
                "subtitle: ",
                app.subtitle
            )
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'here are your options' : 'no options'
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        [99, 98, 97, 'Madhav', true, null, undefined],
        99,
        98,
        97,
        [React.createElement(
            "p",
            { key: "1" },
            "a"
        ), React.createElement(
            "p",
            { key: "2" },
            "b"
        ), React.createElement(
            "p",
            { key: "3" },
            "c"
        )],
        numbers.map(function (number) {
            return React.createElement(
                "p",
                { key: number },
                "Number ",
                number * 2
            );
        }),
        React.createElement("br", null),
        React.createElement(
            "button",
            { disabled: app.options.length <= 0, onClick: onMakeDecision },
            " what should I do"
        ),
        React.createElement(
            "button",
            { onClick: removeOptions },
            "RemoveOptions"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    " ",
                    option,
                    " "
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
