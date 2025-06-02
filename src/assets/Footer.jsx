import React from 'react';
import styles from "../../scss/Footer.module.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <header className={styles.header}>
      <div className={styles.footer}>
        {/* Logo */}
        <Link className={styles.logo} to="/">
          <img src={`${import.meta.env.BASE_URL}assets/nav-logo.svg`} alt="DreamaBit Logo" />
        </Link>

        {/* 導覽列連結 */}
        <nav className={styles.navRight}>
          <ul className={styles.navList}>
            <li><Link to="/quest">任務</Link></li>
            <li><Link to="/journal">夢日記</Link></li>
            <li><Link to="/book">書櫃</Link></li>
            <li><Link to="/login" className={styles.login}>會員</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Footer;
