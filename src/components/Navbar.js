import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const closeMobileMenu = () => setClick(false)
    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbarTop">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" rel="logo" onClick={closeMobileMenu}>
                        <img src={'./images/Name.png'} style={{ width: "100%" }} alt='Website Logo' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick }>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/graphic-design' className='nav-links' onClick={closeMobileMenu}>
                                Graphic Design
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/our-work' className='nav-links' onClick={closeMobileMenu}>
                                Our Work
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}