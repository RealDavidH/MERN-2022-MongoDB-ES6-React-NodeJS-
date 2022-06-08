import React, { Component } from "react";

export class First extends Component {
    render() {
        const {todolist} = this.props
        return (
        <div>
            <h1>Hello Dojo</h1>
            <h2>Things I need to do:</h2>
            <ul>
                <ul>
                    {todolist.map(
                        (todlist, i) => 
                        <li key={i}>{todlist}</li>)
                        }
                </ul>
            </ul>
        </div>
        );
    }
}

export default First;
