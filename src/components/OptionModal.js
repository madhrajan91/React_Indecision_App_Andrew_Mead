import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (

        <Modal isOpen={!!props.selectedOption} 
            onRequestClose={props.handleSelectedOptionClose}
            contentLabel="Selected Option">
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={((e)=> {
                console.log("clicked")
                props.handleSelectedOptionClose();
            })} >Okay</button>
        </Modal>
    )
};

export default OptionModal;