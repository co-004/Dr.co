import React, { useEffect, useState, useRef } from 'react';
import styles from "../../scss/Navbar.module.scss";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside =(event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);      
        };
    },[menuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                {/* Logo */}
                <Link className={styles.logo} to="/">
                    <img src={`${import.meta.env.BASE_URL}/babybit-0.svg`} alt="DreamaBit Logo" />DreamaBit
                </Link>

                {/* 導覽列連結 */}
                <nav className={styles.navRight}>
                    <ul className={styles.navList}>
                        <li><Link to="/login" className={styles.login}>
                            <img src={`${import.meta.env.BASE_URL}assets/user.svg`} alt="Nav Member" />
                        </Link></li>

                        <li onClick={() => setMenuOpen(true)}>
                            <button className={styles.burger}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="70" viewBox="0 0 71 70" fill="none">
  <path d="M67.3336 32.3333L67.3336 37.6663L3.66663 37.6663L3.66663 32.3333L67.3336 32.3333Z" fill="#FAF9F7" stroke="#2E2E2E" stroke-width="0.5"/>
  <path d="M67.3336 55.6667L67.3336 60.9997L3.66663 60.9997L3.66663 55.6667L67.3336 55.6667Z" fill="#FAF9F7" stroke="#2E2E2E" stroke-width="0.5"/>
  <path d="M67.3336 9L67.3336 14.333L3.66663 14.333L3.66663 9L67.3336 9Z" fill="#FAF9F7" stroke="#2E2E2E" stroke-width="0.5"/>
</svg>
                            </button>
                        </li>


                    </ul>                        
                    {menuOpen && (
                            <div className={styles.mobileMenu} ref={menuRef}>
                                <button onClick={() => setMenuOpen(false)} className={styles.close}>✕</button>
                                <ul>
                                    <li><Link to="/login" onClick={() => setMenuOpen(false)}>Log in</Link></li>
                                    <li><Link to="/journal" onClick={() => setMenuOpen(false)}>Dream Journal</Link></li>
                                    <li><Link to="/quest" onClick={() => setMenuOpen(false)}>Weekly Quest</Link></li>
                                    <li><Link to="/book" onClick={() => setMenuOpen(false)}>My DreamBook</Link></li>
                                    <li><Link to="/bag" onClick={() => setMenuOpen(false)}>My DreamBit</Link></li>
                                </ul>
                            </div>
                        )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
