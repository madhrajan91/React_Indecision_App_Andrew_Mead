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

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options :  ["Thing one", "Thing two", "Thing three"]
        }
    }
    // Add option/RemoveOptions(in option) show change the options array in the parent
    // we do this by passing a functor object as a an argument to it
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options:[]
            }
        })
    }

    
    render() {
        const title = "Indecision!!";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options = {this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}

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

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.hasOptions = this.props.hasOptions;
    }
    handlePick(e){
        e.preventDefault();
        alert('action clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}
                disabled={!this.hasOptions}
                >What should I do</button>
            </div>
        );
    }
}

//options component
class Options extends React.Component {
    constructor(props) {
        super(props);
        // binding to ensure context object
        // you could bind another obect of options here.
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        // this will get you access to this.props.options

        //alternative
        //<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
    }
    handleRemoveAll(e) {
        e.preventDefault();
        alert("Remove all is clicked options = " + this.props.options.length );
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
                <button onClick={this.handleRemoveAll}>Remove All</button>

            </div>
        );
    }
}

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

// add Option
class AddOption extends React.Component {
    handleSubmitOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
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