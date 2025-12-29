import React from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => onNavigate('home')}>
                    <span className="logo-text">AltRx</span>
                </div>
                <ul className="navbar-links">
                    <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a></li>
                    <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('educational'); }}>Educational</a></li>
                    <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a></li>
                    <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a></li>
                    <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate('disclaimer'); }}>Disclaimer</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
