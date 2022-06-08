import React, { Component } from "react";

export class Person extends Component {
    render() {
        const {name, age, haircolor} = this.props
        return <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{haircolor}</p>
        </div>;
    }
}

export default Person;
