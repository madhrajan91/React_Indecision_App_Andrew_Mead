import React from 'react';

// add Option
export default class AddOption extends React.Component {
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
