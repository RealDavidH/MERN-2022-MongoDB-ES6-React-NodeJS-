import React, { useState } from 'react'
import Person from './Person'
const Form = () => {
    const [first_name, setFirst] = useState("")
    const [last_name, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [validated, setVal] = useState(false)
    const [submit, setSubmit] = useState(false)

    const handleValidate = (e) => {
        e.preventDefault();
        if (last_name.length <= 1 ||
            first_name.length <= 1 ||
            email.length <= 4 ||
            password != confirm) {
            setVal(false)
            setSubmit(true)
            return
        } else {
            newUser()
            setVal(true)
            return
        }
    }


    const goBack = () => {
        setVal(false)
        setSubmit(false)
        return
    }

    const newUser = () => {
        const userInfo = [first_name, last_name, email, password]
        console.log(userInfo)
    }

    return (
        <div className="d-flex" >
            {!submit ?
                <form className="d-flex flex-column" onSubmit={handleValidate}>
                    <p>First name:</p>
                    <input type="text" onChange={(e) => setFirst(e.target.value)} value={first_name} />
                    {first_name < 3&& submit&& <span className="danger">First name must be at least 3 characters long!</span>} 
                    <p>Last name:</p>
                    <input type="text" onChange={(e) => setLast(e.target.value)} value={last_name} />
                    {last_name < 3&& submit&& <span className="danger">Last name must be at least 3 characters long!</span>} 
                    <p>Email:</p>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    {email < 5&& submit&& <span className="danger">Email name must be at least 5 characters long!</span>} 
                    <p>Password</p>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <p>Confirm Password:</p>
                    <input type="text" onChange={(e) => setConfirm(e.target.value)} value={confirm} />
                    {password == confirm&& submit&& <span className="danger">Passwords must match!</span>} 
                    <input type="submit" value="Create User" />
                </form>
                :
                <form className="d-flex flex-column" onSubmit={goBack}>
                    <Person first_name={first_name} last_name={last_name} email={email} password={password} />
                    <input type="submit" value="Go back" />
                </form>
            }
        </div>
    )
}

export default Form