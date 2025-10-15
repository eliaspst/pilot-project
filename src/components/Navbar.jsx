import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
        <a href="" className="logo">Logo</a>

        <nav className="navbar">
            <a href="/">LEISTUNGEN</a>
            <a href="/">PREISE</a>
            <a href="/">FAQ & STUDIEN</a>
            <a href="/">KOSTENFREIE BERATUNG</a>
            <a href="/">ÜBER UNS</a>
            <a href="/">KONTAKT</a>
        </nav>
    </header>
  )
}

export default Navbar;