import React from 'react';


import Options from './Options.js'

import Action from './Action.js'
import Header from './Header.js'
import AddOption from './AddOption.js';
import OptionModal from './OptionModal.js';



class IndecisionApp extends React.Component {
    state = {
        options :  ["Thing one", "Thing two", "Thing"],
        selectedOption: undefined
    };
    // Add option/RemoveOptions(in option) show change the options array in the parent
    // we do this by passing a functor object as a an argument to it
    // passing functions downstream (see render)
    handleDeleteOptions = (e) => {
        // this.setState(() => {
        //     return {
        //         options:[]
        //     }
        // })

        // or
         this.setState(() => ({options: []}))
    }
    handleDeleteOption = (option) => {
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
    handleOnPickOptions = (e) => {
        e.preventDefault()
        console.log(this)
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => {
            return {
                selectedOption: option
            }
        })
    }

    // see how this is invoked downstream
    handleAddOption = (option) => {
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
    handleSelectedOptionClose = () => {
        console.log('handleSelectedOptionClose')
        this.setState(() => {
            return {
                selectedOption:undefined
            }
        })
    }
    constructor(props) {
        super(props);
        // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        // this.handleDeleteOption = this.handleDeleteOption.bind(this);
        // this.handleOnPickOptions = this.handleOnPickOptions.bind(this);
        // this.handleAddOption = this.handleAddOption.bind(this);
        // When this triggered down to the child, this causes a render
        // this.state = {
        //     options :  props.options
        // }
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
                <OptionModal selectedOption = {this.state.selectedOption} handleSelectedOptionClose={this.handleSelectedOptionClose}/>
            </div>
        )
    }
}
// no need for this with class props
// IndecisionApp.defaultProps = {
//     "options": ["Thing one", "Thing two", "Thing"]
// }


export default IndecisionApp;