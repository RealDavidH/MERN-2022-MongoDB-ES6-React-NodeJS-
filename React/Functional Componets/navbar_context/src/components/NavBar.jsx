import React, { useContext } from 'react'

import { Wrapper } from '../context/WrapperContext'

const NavBar = () => {

    const { name } = useContext(Wrapper)

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Hello {name} </span>
                </div>
            </nav>
        </div>
    )
}

export default NavBar