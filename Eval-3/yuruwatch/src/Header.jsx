
import React, { useState, useEffect } from 'react';
import './Animac.css';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, close, menu, search } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 

const Header = () => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownActive(prev => !prev);
    };

    const toggleMenu = () => {
        setMenuActive(prev => !prev);
    };

    const handleClickOutside = (event) => {
        
        if (!event.target.closest('.bookmark-container')) {
            setDropdownActive(false);
        }
    };

    useEffect(() => {
       
        window.addEventListener('click', handleClickOutside);
        return () => {
            
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <header>
        <h2 className="logo">
            <a href="/home">
                <img src="./bg.png" style={{ height: '7vh' }} alt="Logo" />
            </a>
        </h2>
        <nav className="navigation">
            <ul id="menu" className={menuActive ? 'active' : ''}>
                <li><a href="/home">Home</a></li>
                <li><a href="#">Community</a></li>
                <li className="genre-dropdown">
                    <a href="#" className="dropdown-toggle">Genre</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Comedy</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Fantasy</a></li>
                        <li><a href="#">Horror</a></li>
                        <li><a href="#">Mystery</a></li>
                        <li><a href="#">Romance</a></li>
                        <li><a href="#">Sci-Fi</a></li>
                        <li><a href="#">Slice of Life</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Thriller</a></li>
                    </ul>
                </li>
                <li>
                    <div className="search-bar">
                        <input type="list" list="browsers" placeholder="Search..." />
                        <datalist id="browsers">
                            <option value="codegeass.html">Code Geass</option>
                            <option value="rimuru.html">That time I got reincarnated as a Slime</option>
                            <option value="aot.html">Attack On Titans</option>
                            <option value="yourname.html">Your Name</option>
                        </datalist>
                        <span className="search-icon"><IonIcon icon={search} /></span>
                    </div>
                </li>
                <li><a href="Account.html"><img src="iccon-removebg-preview.png" alt="Icon" /></a></li>
            </ul>
            <div className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
                <IonIcon icon={menu} />
            </div>
        </nav>
    </header>
    );
};

export default Header;
