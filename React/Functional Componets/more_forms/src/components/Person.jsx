import React from "react";

const Person = (props) => {
    return (
    <div>
        <p>{ props.first_name } { props.last_name } </p>
        <p>{ props.email }</p>
        <p>{ props.password }</p>
    </div>
    );
};

export default Person;
