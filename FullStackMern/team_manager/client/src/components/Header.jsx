import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid">
                <ul className="navbar-nav mx-auto w-75">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-light fs-3 text-decoration-underline">Manage Players</Link>
                    </li>
                    <li className='nav-item'>
                        <p className="nav-link text-light fs-3 text-decoration-underline">|</p>
                    </li>
                    <li className="nav-item">
                        <Link to='/Manage/0' className="nav-link text-light fs-3 text-decoration-underline" >Manage Player Status</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header