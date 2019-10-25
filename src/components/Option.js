import React from 'react';

//Action functional vs class 
const Option = (props) => {
    const opt= props.optionText;
        return (
            <div className="option">
                    <p className="option__text">{props.count}. {opt}</p>
                    <button className="button button--link"
                            onClick={(e) => {
                        props.handleDeleteOption(opt)
                    }}> Remove</button>
                    
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
export default Option;