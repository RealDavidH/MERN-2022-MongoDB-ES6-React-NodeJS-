import React, { Component } from "react";

export class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    ageUp = () =>{
        this.setState({age: this.state.age + 1})
    }
    render() {
        const { name, age, haircolor } = this.props;
        return (
            <div className="text-center">
                <h2>{name}</h2>
                <p>Age: {this.state.age}</p>
                <p>Haircolor: {haircolor}</p>
                <input type="button" value="Make Person Age!" onClick={ this.ageUp } />
            </div>
        );
    }
    
}

export default Person;
