import React, { useState } from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { toggleDarkMode } from './store'; // Import action creator

function Nav({ darkMode, toggleDarkMode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="navbar">


            <div className="toggle-container">
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    style={{ display: 'none' }}
                />
                <label htmlFor="checkbox" className="switch">
                    <span className={`slider ${darkMode ? 'checked' : ''}`} />
                </label>
            </div>
            <div className="icon" >


                <FontAwesomeIcon icon={faInstagram} className="icons" />
                <FontAwesomeIcon icon={faTwitter} className="icons" />
                <FontAwesomeIcon icon={faGithub} className="icons" />
                <FontAwesomeIcon icon={faLinkedin} className="icons" />



            </div>


            <div className="logo-container">
                <img className="logo" src="/h2.png" alt="logo" />
            </div>

            <nav className={`nav ${isMobileMenuOpen ? 'nav-open open' : ''}`}>
                <div className={`menu-icon ${isMobileMenuOpen ? 'dark' : ''}`} onClick={toggleMobileMenu}>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                </div>
                <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li>
                        <a href="/" className={`nav-link ${darkMode ? "dark" : ""}`} onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li>
                        <a href="/hotels" className={`nav-link ${darkMode ? "dark" : ""}`} onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/reserve" className={`nav-link ${darkMode ? "dark" : ""}`} onClick={closeMobileMenu}>
                            blog
                        </a>
                    </li>
                    <li>
                        <a href="/aboutus" className={`nav-link ${darkMode ? "dark" : ""}`} onClick={closeMobileMenu}>
                            work
                        </a>
                    </li>
                    <li>
                        {isMobileMenuOpen && (
                            <>
                                <FontAwesomeIcon icon={faInstagram} className="ome" />
                                <FontAwesomeIcon icon={faTwitter} className="ome" />
                                <FontAwesomeIcon icon={faGithub} className="ome" />
                                <FontAwesomeIcon icon={faLinkedin} className="ome" />
                            </>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => ({
    darkMode: state.darkMode, // Correctly access the darkMode property from the state
});



  export default connect(mapStateToProps, { toggleDarkMode })(Nav);
