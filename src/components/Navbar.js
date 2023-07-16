import React from 'react'
import { Link } from 'react-router-dom'

import Favorite from './Favorites'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar