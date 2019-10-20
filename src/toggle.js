class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)

        this.showText = "Show Text";
        this.hideText = "Hide Text";

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(e) {
       console.log('inside '+ this.state.visibility);

        this.setState((prevState) => {
            return {
                "visibility": !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1> Visiblity: {this.state.visibility ? 'true':'false'}</h1>
                <button onClick={this.handleToggleVisibility}>
                        {this.state.visibility ? this.hideText:this.showText}</button>
                        {this.state.visibility && (<p>Showing some blank text</p>)} 
            </div>
        );
    }
}

const appRoot = document.getElementById("app");
ReactDOM.render(<VisibilityToggle/>, appRoot);

// const appRoot = document.getElementById("app");


// const showText = "Show Text";
// const hideText = "Hide Text";

// let text = "";
// let visibility = false;

// const toggleVisibility = (e) => {
//     e.preventDefault();
//     visibility = !visibility;
//     console.log(e.target.innerHTML);
//     if (e.target.innerHTML === showText) {
//         e.target.innerHTML = hideText;

//         text = <p>Showing Text</p>;
//         console.log(text)
//     }
//     else {
//         e.target.innerHTML = showText;
//         text = "";
//     }
//     renderApp();
// };

// const renderApp = () => { 
//     const template = (
//         <div>
//             <h1> Toggle Visibility</h1>
//             <button onClick={toggleVisibility}>Show Text</button>
//             <button onClick={toggleVisibility}> {visibility ? hideText: showText}</button>
//             {text}
//             {visibility && (<p> Andrew's way</p>)}
//         </div>
//     )

//     ReactDOM.render(template, appRoot);

// };
// renderApp();