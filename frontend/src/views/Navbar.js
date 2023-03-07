import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbarlogo">
                    <div className="logo-text">
                        <h2>Logo</h2>
                    </div>
                    <div className="login-text">
                        <h1>Get Involved</h1>
                    </div>
                </div>
                <hr />
                <div className="navbarlinks">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
