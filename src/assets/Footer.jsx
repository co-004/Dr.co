import React, { useState, useEffect } from 'react';
import styles from "../../scss/Footer.module.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.Footer}>
      <div className={styles.footer}>
        {/* Logo
        <Link className={styles.logo} to="/">
          <img src={`${import.meta.env.BASE_URL}/babybit-0.svg`} alt="DreamaBit Logo" />DreamaBit
        </Link> */}
        
        <button 
          onClick={scrollToTop} 
          className={`${styles.backToTop} ${showBackToTop ? styles.show : ""}`}
          aria-label="Back to Top"
        >
          <img src={`${import.meta.env.BASE_URL}assets/top.svg`} alt="Back to Top" />
        </button>

        {/* 導覽列連結 */}
        <nav className={styles.navRight}>
          <ul className={styles.navList}>
            <li><Link to="/quest">Weekly Quest</Link></li>
            <li><Link to="/journal">Dream Journal</Link></li>
            <li><Link to="/book">My DreamBook</Link></li>
            <li><Link to="/bag">My DreamBit</Link></li>
            <li><Link to="/login" className={styles.login}>Log in</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;