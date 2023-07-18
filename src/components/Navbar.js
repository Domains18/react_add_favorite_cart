import React from 'react'
import { Link } from 'react-router-dom'

import Favorite from './Favorites'
import '../index.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/" className='links'>Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites" className='links'>Favorites</Link>
                    </li>
                    <li>
                        <Link to="/cart" className='links'>Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar