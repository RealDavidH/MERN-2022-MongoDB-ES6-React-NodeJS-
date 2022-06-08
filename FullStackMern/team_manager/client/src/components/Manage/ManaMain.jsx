import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GamesTable from './GamesTable'



const ManaMain = () => {
    const [selected, setSelected] = useState(0)

    const handleSelect = (num) => {
        console.log(num, 'num')
        setSelected(num)
    }


    return (
        <div className='w-75 border border-3 border-dark mx-auto p-3 mt-3'>
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to='/Manage/0' className="nav-link text-light fs-3 text-decoration-underline btn">Game 1</Link>
                        </li>
                        <li className='nav-item'>
                            <p className="nav-link text-light fs-3">|</p>
                        </li>
                        <li className="nav-item">
                            <Link to='/Manage/1' className="nav-link text-light fs-3 text-decoration-underline btn">Game 2</Link>
                        </li>
                        <li className='nav-item'>
                            <p className="nav-link text-light fs-3">|</p>
                        </li>
                        <li className="nav-item">
                            <Link to='/Manage/2' className="nav-link text-light fs-3 text-decoration-underline btn">Game 3</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <GamesTable  select = {selected} /> 
        </div>
    )
}

export default ManaMain