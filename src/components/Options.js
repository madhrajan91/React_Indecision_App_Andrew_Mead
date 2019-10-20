import React from 'react'
import Option from './Option'
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

export default Options;
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