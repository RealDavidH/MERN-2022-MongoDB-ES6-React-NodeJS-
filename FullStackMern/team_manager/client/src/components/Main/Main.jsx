import React, { useState, useEffect } from 'react'
import Table from './Table'
import Form from './Form'


const Main = () => {
    const [isList, setIsList] = useState(true)

    return (
        <div className='w-75 border border-3 border-dark mx-auto p-3 mt-3'>
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link text-light fs-3 text-decoration-underline btn" aria-current="page" onClick={() => setIsList(true)}>List</button>
                        </li>
                        <li className='nav-item'>
                            <p className="nav-link text-light fs-3">|</p>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-light fs-3 btn text-decoration-underline" aria-current="page" onClick={() => setIsList(false)}>Add Player</button>
                        </li>
                    </ul>
                </div>
            </nav>
            {isList ?
                <div>
                    <Table />
                </div>
                :
                <div>
                    <Form setIsList = {setIsList}/>
                </div>
            }
        </div>
    )
}

export default Main