import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../scss/Layout.module.scss';

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [hasScrolled, setHasScrolled] = useState(false); // 判斷是否滑動過
  const [showNavbar, setShowNavbar] = useState(!isHomePage); // 非首頁一開始就顯示

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setShowNavbar(true);   // 顯示 Navbar
      }
      else {
        setShowNavbar(false);  // 回到頂部隱藏
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, hasScrolled]);

  return (
    <>
      {showNavbar && (
        <div className={styles.navbarWrapper}>
          <Navbar />
        </div>
      )}

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
