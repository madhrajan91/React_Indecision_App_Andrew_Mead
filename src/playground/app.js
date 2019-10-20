const obj = {
    "name": "Madhav",
    getName() {
        return this.name;
    }
}
console.log(obj.getName());

//reference to a method
//const getName = obj.getName();

// will not be able to reference this, so name will be undefined.
//getName();

// use bind
const getName = obj.getName.bind(obj);
console.log(getName());

const getName2 = obj.getName.bind({"name": "Vikram"});
console.log(getName2());

// stateless funcitonal components can be used as an alternative 
// if they are simple and don't have a lot to do with states
const User = (props) => {
    return (
        <div>
            <h3> Stateless </h3>
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
        </div>
    )
}


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleOnPickOptions = this.handleOnPickOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        // When this triggered down to the child, this causes a render
        this.state = {
            options :  props.options
        }
    }
    componentDidMount() {
        try {

            console.log('fetching data');
            const jsonObj = localStorage.getItem('state');
            const options = JSON.parse(jsonObj);
            console.log("options");
            console.log( options);
            if (options) {
                this.setState(() => ({options}))
            }
        }
        catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update');
        if (prevState.options.length !== this.state.options.length) {
            const jsonObj = JSON.stringify(this.state.options);
            console.log(jsonObj)
            localStorage.setItem('state', jsonObj);
        }
        console.log(this.prevState)
        console.log(this.state)
    }
    componentWillUnmount() {
        console.log("component unmount")
    }
    // Add option/RemoveOptions(in option) show change the options array in the parent
    // we do this by passing a functor object as a an argument to it
    // passing functions downstream (see render)
    handleDeleteOptions(e) {
        // this.setState(() => {
        //     return {
        //         options:[]
        //     }
        // })

        // or
         this.setState(() => ({options: []}))
    }
    handleDeleteOption(option) {
        // want to pass this to <Option>, but IndecisionApp only knows <Options>
        console.log('deleteOption');
        console.log(" Option " + option);
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((optionToRemove) => {
                     console.log("option text " + optionToRemove)
                    return (optionToRemove !== option);
                 })
            };
        })
    }
    // passing functions downstream (see render)
    handleOnPickOptions(e) {
        e.preventDefault()
        console.log(this)
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
        console.log(randomNum);
    }

    // see how this is invoked downstream
    handleAddOption (option) {
        if (!option) {
            return 'Enter valid value to add'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists';
        }
        console.log(option)
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // })

        //OR 
        this.setState((prevState) => ({options: prevState.options.concat([option])} ))
    }
    
    render() {
        const title = "Indecision!!";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handleOnPickOptions}/>
                <Options options = {this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption = {this.handleAddOption}/>
                <User name="Madhav" age="26"/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    "options": ["Thing one", "Thing two", "Thing"]
}

//Action functional vs class 
const Header = (props) => {
        console.log(props);
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        );
}
Header.defaultProps = {
    "title": "Default Indecision Title"
}
/*
//extended class must be  uppercase
class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
*/

//Action functional vs class 
const Action = (props) => {
    return (
        <div>
                <button onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                    What should I do
                </button>
            </div>
    )
}
/*
class Action extends React.Component {
    constructor(props) {
        super(props);
        this.hasOptions = this.props.hasOptions;
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                disabled={!this.hasOptions}
                >What should I do</button>
            </div>
        );
    }
}
*/


//Action functional vs class 
const Options = (props) => {
    console.log("length " +props.options.length);
    return (
        <div>
                Options Component here
                {props.options.length == 0 && <p>please add an option</p>}
                <ol>
                {
                        props.options.map((opt) => {
                        console.log(opt);
                        return (
                                <Option key={opt} 
                                optionText={opt}
                                handleDeleteOption={props.handleDeleteOption} />
                        )
                        
                    })
                }
                </ol>
                <button onClick={props.handleDeleteOptions}>Remove All</button>

            </div>
    )
}
/*
//options component
class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        console.log(this.props.options.length);
        return( 
            <div>
                Options Component here
                <ol>
                {
                    this.props.options.map((opt) => {
                        console.log(opt);
                        return (
                                <Option key={opt} optionText={opt} />
                        )
                        
                    })
                }
                </ol>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>

            </div>
        );
    }
}
*/

//Action functional vs class 
const Option = (props) => {
    const opt= props.optionText;
        return (
            <div>
                <li key={opt}>{opt}
                    <button onClick={(e) => {
                        props.handleDeleteOption(opt)
                    }}> Remove</button>
                </li>
            </div>
        );
}
/*
class Option extends React.Component {
    render() {

        const opt= this.props.optionText;
        return (
            <div>
                <li key={opt}>{opt}</li>
            </div>
        );
    }
}
*/
// add Option
class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmitOption = this.handleSubmitOption.bind(this);
        this.state = {
            "error": undefined
        }
    }
    handleSubmitOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        // passing option upstream since handleAddOption is coming from
        // the <InDecisionApp />
        const error = this.props.handleAddOption(option);
        if (error) {
            // this.setState ( () => {
            //     return {
            //         "error": error
            //     };
            // });

            // or
            this.setState (() => ({"error": error}))
        }
        // if (!error) {
        //     e.target.elements.option.value = "";
        // }
        //}
    }
    render() {
        return (
            <div>
                {this.state.error && <p>ERROR {this.state.error}</p>}
                <form onSubmit={this.handleSubmitOption}>
                    <input type="text" name="option" />
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <IndecisionApp />
    </div>
)




//ReactDOM.render(jsx, document.getElementById('app'))
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))