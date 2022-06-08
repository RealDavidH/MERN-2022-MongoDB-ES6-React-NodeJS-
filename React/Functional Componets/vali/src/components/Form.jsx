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
    const [msg, setMsg] = useState('')


    const handleValidate = (e) => {
        e.preventDefault();
        setSubmit(true)
        if(first_name.length < 3){
            setMsg('First name must be longer then 3 characters!')
            return setVal(false)
        }
        if(last_name.length < 3){
            setMsg('Last name must be longer then 3 characters!')
            return setVal(false)
        }
        if(email.length < 5){
            setMsg('Email must be longer than 5 characters!')
            return setVal(false)
        }
        if(password.length < 3){
            setMsg('Password must be longer than 3 characters!')
            return setVal(false)
        }
        if(password != confirm){
            setMsg('Passwords must match!')
            return setVal(false)
        }
        newUser()
        setVal(true)
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
            {!submit &&
                <form className="d-flex flex-column" onSubmit={handleValidate}>
                    <p>First name:</p>
                    <input type="text" onChange={(e) => setFirst(e.target.value)} value={first_name} />
                    <p>Last name:</p>
                    <input type="text" onChange={(e) => setLast(e.target.value)} value={last_name} />
                    <p>Email:</p>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <p>Password</p>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <p>Confirm Password:</p>
                    <input type="text" onChange={(e) => setConfirm(e.target.value)} value={confirm} />
                    <input type="submit" value="Create User" />
                </form>
            }
            {submit && !validated &&
                <form className="d-flex flex-column" onSubmit={handleValidate}>
                    <span className="danger">{msg}</span>
                    <p>First name:</p>
                    <input type="text" onChange={(e) => setFirst(e.target.value)} value={first_name} />
                    <p>Last name:</p>
                    <input type="text" onChange={(e) => setLast(e.target.value)} value={last_name} />
                    <p>Email:</p>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <p>Password</p>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <p>Confirm Password:</p>
                    <input type="text" onChange={(e) => setConfirm(e.target.value)} value={confirm} />
                    <input type="submit" value="Create User" />
                </form>}
            {submit && validated &&
                <form className="d-flex flex-column" onSubmit={goBack}>
                    <Person first_name={first_name} last_name={last_name} email={email} password={password} />
                    <input type="submit" value="Go back" />
                </form>
            }

        </div>
    )
}

export default Form