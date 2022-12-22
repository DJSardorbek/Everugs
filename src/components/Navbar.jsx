import React from 'react';
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="navbar-nav">
                <div className="nav-link">
                    <img src="../icons/phone.png" alt="phone"/>
                    <p>+375 29 292-29-29 (VEL)</p>
                    <p>+375 33 333-33-33 (МТС)</p>
                </div>
                <div className="nav-link">
                    <img src="../icons/location.png" alt="location"/>
                    <p>ваш город</p>
                </div>
                <div className="nav-link">
                    <img src="../icons/instagram-navbar.png" alt="instagram"/>
                    <p style={{width: '100px'}}>посетите нашу страницу</p>
                </div>
            </div>
        </div>
    </nav>
  )
}
