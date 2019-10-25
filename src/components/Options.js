import React from 'react'
import Option from './Option'
//Action functional vs class 
const Options = (props) => {
    console.log("length " +props.options.length);
    return (
        <div>                
                {props.options.length == 0 && <p className="message">please add an option</p>}
                <ol>
                {
                        props.options.map((opt, index) => {
                        console.log(opt);
                        return (
                                <Option key={opt} 
                                optionText={opt}
                                count={index+1}
                                handleDeleteOption={props.handleDeleteOption} />
                        )
                        
                    })
                }
                </ol>
                <div className="widget-header">
                    <h3 className="widget-header__title"> Your Options </h3>
                    <button onClick={props.handleDeleteOptions} 
                            className="button button--link">Remove All</button>
                </div>

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