import React from 'react';

// add Option
export default class AddOption extends React.Component {
    state = { // class properties syntax
        "error": undefined
    }
    constructor(props) {
        super(props)
        this.handleSubmitOption = this.handleSubmitOption.bind(this);
        // this.state = {
        //     "error": undefined
        // }
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
                {this.state.error && <p className="add-option-error">ERROR {this.state.error}</p>}
                
                <form className="add-option" onSubmit={this.handleSubmitOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button"> Add Option </button>
                </form>
            </div>
        );
    }
}
