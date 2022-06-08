import React, { useState } from "react";

const Person = props => {
    return(
    <div>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
    </div>
    );
};

export default Person;
