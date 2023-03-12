import React from 'react';
import { pageLinks, socialLinks } from '../data';
import logo from '../images/logo.svg';

const Navbar = () => {

  return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
                </div>

                <ul className="nav-links" id="nav-links">

                    {
                        pageLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a href={link.href} className="nav-link"> {link.text} </a>
                                </li>
                            )
                        })
                    }

                </ul>

                <ul className="nav-icons">
                    {
                        socialLinks.map((slink) => {
                            return (
                            <li key={slink.id}>
                                <a href={slink.href} target="_blank" rel="noreferrer" className="nav-icon"><i className={slink.icon}></i></a>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
  );
};

export default Navbar;