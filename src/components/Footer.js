import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <>
            <nav className="footer-container">
                <div className="footer-items">
                    <div className="footer-row">
                        <h5 className="footer-header">Site Map</h5><hr />
                        <ul className=" list-unstyled ">
                            <li>
                                <Link to='/' className='text-light nav-link' >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/graphic-design' className='text-light nav-link'>
                                    Graphic Design
                                </Link>
                            </li>
                            <li>
                                <Link to='/about-us' className='text-light nav-link' >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact-us' className='text-light nav-link' >
                                    Contact Us
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-row">
                        <h5 className="footer-header centered">Monaghan Office</h5><hr />
                        <p className="text-light">  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                        </svg>  +353 87 210 5305</p>
                        <a className="text-light" href="https://goo.gl/maps/gv5ke2gXp7STHdPe7" target="_blank" rel="noreferrer"><p className="text-light">Carrickaderry,<br />Clontibret,<br />Monaghan,<br />H18 X058.</p></a>
                        
                        
                    </div>
                    <div className="footer-row.flat">
                        <h5 className="footer-header">Connect With Us</h5><hr />
                        <div className="centered">
                            <a href="https://www.facebook.com/thatssavage/" target="_blank" rel="noreferrer"><button type="button" className="btn-- btn-f"><FontAwesomeIcon icon={faFacebookF} size="2x" /></button></a>
                            <a href="https://www.instagram.com/thatssavage.print/?hl=en" target="_blank" rel="noreferrer"><button type="button" className="btn-- btn-i "><FontAwesomeIcon icon={faInstagram} size="2x" /></button></a>
                            <a href="https://www.linkedin.com/in/declan-savage-a972b424/?originalSubdomain=ie" target="_blank" rel="noreferrer"><button type="button" className="btn-- btn-l"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></button></a>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    Created by <a className="link-text" href="https://www.linkedin.com/in/liam-savage-72b532101" target="_blank" rel="noreferrer">Liam</a>
                </div>

            </nav>
        </>
    )
}