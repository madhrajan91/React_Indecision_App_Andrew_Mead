class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handlMinusOne = this.handlMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: props.count
        };
    }
    componentDidMount() {
        let count = 0;
        try {
            console.log('fetching data')
            const jsonObj = localStorage.getItem("state")
            const obj = JSON.parse(jsonObj);
            count = obj.count;
            //countInt = parseInt(obj.count);
            //console.log(countInt);
            /*
            if (!isNaN(countInt)) {
                count = countInt;
            } 
            */
            /*
            console.log("count" + count);
            */
        }   
        catch (e)
        {

        }
        this.setState(() => ({"count": count}));
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("update");
        if (prevState.count !== this.state.count) {
            localStorage.setItem("state", JSON.stringify(this.state));
        }
    }
    handleAddOne(e) {
        /*
            // won't rerender
        this.state.count = this.state.count+1;
        console.log("add " + this.state.count);
        */
       this.setState( (prevState) => {
           return {
                "count" : prevState.count+1
           };
       });
    }
    
    handlMinusOne(e) {
        console.log("minus 1");
        this.setState ((prevState) => {
            return {
                "count": prevState.count-1
            } 
        });
    }
    
    handleReset(e) {
        console.log("reset ");
        // Better

        this.setState (() => {
            return {
                "count": 0
            }
        })
        this.setState( (prevState) => {
            return {
                 "count" : prevState.count+1
            };
        });
        //Asynchronous (Does not take prev state into account)
        // (you won't see it being to set to zer)
        // this.setState ({
        //         "count": 0
        //     }
        // );
        // this.setState({
        //     "count" : this.state.count+1
        // });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handlMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));

// const handleAddOne = (e) => {
//     console.log("add 1");
// }

// const handlMinusOne = (e) => {
//     console.log("add 1");
// }

// const handleReset = (e) => {
//     console.log("reset ");
// }

// let count=0;
// const someID= 'myButton';
// const add1 = () => {
//     console.log("add1");
//     count = count+1;
//     renderCounterApp();
// }

// const minusOne = () => {
//     console.log("minus1");
//     count = count-1;
//     renderCounterApp();
// }

// const resetButton = () => {
//     console.log("reset");
//     count = 0;
//     renderCounterApp();
// }
// // jsx does not have data binding

// // Babel output

// const appRoot = document.getElementById('app')



// const renderCounterApp = () => {
//     // this super efficient 
//     // take a looking at the chrome inspect
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={add1} id={someID} className="button">+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetButton}>reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot)
// }
// renderCounterApp();