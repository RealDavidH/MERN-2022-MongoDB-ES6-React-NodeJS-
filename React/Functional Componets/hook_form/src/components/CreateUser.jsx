import React, { useState }from "react";
import Person from "./Person"

const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { name, email, password };
        console.log(newUser)
    };
    return (
        <div>
            <form className="d-flex flex-column text-center" onSubmit={createUser}>
                <p>Name:</p>
                <input type="text" onChange={ (e) => setName(e.target.value) } value={ name }/>
                <p>Email:</p>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                <p>Password:</p>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
                <input type="submit" value="Create User" />
            </form>
            <Person name={ name } email={ email } password={ password }/>
        </div>
    );
};

export default CreateUser;
