import React from 'react'
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
export default Action;