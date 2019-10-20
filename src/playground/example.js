const obj = {
    "name": "Madhav",
    getName() {
        return this.name;
    }
}
console.log(obj.getName());

//reference to a method
//const getName = obj.getName();

// will not be able to reference this, so name will be undefined.
//getName();

// use bind
const getName = obj.getName.bind(obj);
console.log(getName());

const getName2 = obj.getName.bind({"name": "Vikram"});
console.log(getName2());

// stateless funcitonal components can be used as an alternative 
// if they are simple and don't have a lot to do with states
const User = (props) => {
    return (
        <div>
            <h3> Stateless </h3>
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
        </div>
    )
}

