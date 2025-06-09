import React from 'react';
import styles from "../../scss/Navbar.module.scss";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                            <img src={`${import.meta.env.BASE_URL}assets/nav-member.svg`} alt="Nav Member" />
                        </Link></li>

                        <li onClick={() => setMenuOpen(true)}>
                            <button className={styles.burger}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="63" viewBox="0 0 70 63" fill="none">
                                    <path d="M66.8337 25.3333L66.8337 30.6663L3.16675 30.6663L3.16675 25.3333L66.8337 25.3333Z" fill="#FAF9F7" stroke="#2E2E2E" strokeWidth="0.5" />
                                    <path d="M66.8337 48.6667L66.8337 53.9998L3.16675 53.9998L3.16675 48.6667L66.8337 48.6667Z" fill="#FAF9F7" stroke="#2E2E2E" strokeWidth="0.5" />
                                    <path d="M66.8337 2L66.8337 7.33301L3.16675 7.33301L3.16675 2L66.8337 2Z" fill="#FAF9F7" stroke="#2E2E2E" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </li>
                        {menuOpen && (
                            <div className={styles.mobileMenu}>
                                <button onClick={() => setMenuOpen(false)} className={styles.close}>✕</button>
                                <ul>
                                    <li><Link to="/login">Log in</Link></li>
                                    <li><Link to="/journal">Dream Journal</Link></li>
                                    <li><Link to="/quest">Weekly Quest</Link></li>
                                    <li><Link to="/book">My DreamBook</Link></li>
                                    <li><Link to="/bag">My DreamBit</Link></li>
                                </ul>
                            </div>
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
