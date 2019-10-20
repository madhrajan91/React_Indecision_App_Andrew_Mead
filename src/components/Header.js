import React from 'react'

//Action functional vs class 
const Header = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}
Header.defaultProps = {
"title": "Default Indecision Header"
}
/*
//extended class must be  uppercase
class Header extends React.Component {
render() {
    console.log(this.props);
    return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
    );
}
}
*/

export default Header;