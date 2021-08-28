import '../css/Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const PhoneNumber=()=> {
    return (
        <Link to='tel:+353872105305' className='text-light nav-link'>
            <svg width="1.1em" height="1.1em" viewBox="0 0 16 16" className="bi bi-telephone-fill text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
            </svg> +353 (0)87 210 5305
        </Link>
    )
}

export default function Footer() {
    return (
        <>
            <nav className="footer-container">
                <div className="footer-items">

                    <div className="footer-row">
                        <h5 className="footer-header centered">Phone Number</h5>
                            <div className="footer-row-number footer-spacing">
                                <PhoneNumber />
                            </div>
                    </div>

                    <div className="footer-row">
                        <h5 className="footer-header">Social Media</h5>
                        <div className="centered footer-spacing">
                            <a href="https://www.facebook.com/thatssavage/" target="_blank" rel="noreferrer"><button type="button" className="btn-- btn-f"><FontAwesomeIcon icon={faFacebookF} size="2x" /></button></a>
                            <a href="https://www.instagram.com/thatssavage.print/?hl=en" target="_blank" rel="noreferrer"><button type="button" className="btn-- btn-i "><FontAwesomeIcon icon={faInstagram} size="2x" /></button></a>
                            <a href="https://www.linkedin.com/in/declan-savage-a972b424/?originalSubdomain=ie" target="_blank" rel="noreferrer"><button type="button" className="btn-- btn-l"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></button></a>
                        </div>
                    </div>

                    <div className="footer-row">
                        <h5 className="footer-header centered" style={{marginBottom: '0rem'}}>Monaghan Office</h5>
                        <Link className="text-light nav-link footer-spacing" href="https://goo.gl/maps/gv5ke2gXp7STHdPe7" target="_blank" rel="noreferrer">
                            Carrickaderry, Clontibret,<br/>
                            Monaghan, H18 X058
                        </Link>
                    </div>
                </div>

                <div className="footer-footer">
                    Created by <a className="link-text" href="https://www.linkedin.com/in/liam-savage-72b532101" target="_blank" rel="noreferrer">Liam</a>
                </div>

            </nav>
        </>
    )
}