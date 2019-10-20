// babel  src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// yarn init
// yarn add babel-preset-react
// yarn add babel-preset-env
// yarn install to install dependencies
console.log('app.js is running')

// check this out on babel

// create a templateTwo var JSX expression
// div
//  h1 -> Andrew Mead
//  p -> Age:
// p -> Location: 
// Render templateTwo
const user = {
    "name" : "Madhav",
    "age": 27,
    "location": "Boston"
}

function getLocation(location) {
    if (location) {
        return <p> Location: {location}</p>;
    }
    else {
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





const appRoot = document.getElementById('app');

const initialOptions = ["one", "two"];
let app = {
    "title": "Indecision App",
    "subtitle": "Learning React",
    "options": initialOptions
};

const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const onMakeDecision = (e) => {
    e.preventDefault()
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
    
}

const numbers = [55,101,1000]

const removeOptions = (e) => {
    e.preventDefault();
    app.options = [];
    renderApp();
}


const renderApp = () => {
    
    
    // JSX -Javascript XML
    // reference function here (don't call it)
    const template = (
        <div>
            <h1 id='sampleheader'> {app.title} </h1>
            <h6>{app.subtitle && <p>subtitle: {app.subtitle}</p>}</h6>
            <p>{app.options.length > 0 ? 'here are your options': 'no options'}</p>
            <p>{app.options.length}</p>
            
            {
                [99, 98, 97, 'Madhav', true, null, undefined]
            }
            {99}{98}{97}
            {
                [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
            }
            {
                numbers.map((number) => {
                    return <p key={number}>Number {number*2}</p>;
                })
            }
            <br />
            <button disabled={app.options.length<=0} onClick={onMakeDecision}> what should I do</button>
            <button onClick={removeOptions}>RemoveOptions</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}> {option} </li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    ); 
    ReactDOM.render(template, appRoot);
}

renderApp();