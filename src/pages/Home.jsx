// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../scss/Home.module.scss";

export default function Home() {
  
  
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.home}>
        {/* Hero 區塊 */}
        <section className={styles.hero}>

          <div className={styles.heroLogo}>
            <div className={styles.logodreamabit}>DreamaBit</div>
            {/* <img src={`${import.meta.env.BASE_URL}assets/logo-word.svg`} alt="DreamaBit Logo" /> */}
            <img className={styles.heroAni} src={`${import.meta.env.BASE_URL}assets/babybit-1.svg`} alt="DreamaBit baby" />
          </div>


          <button className={styles.ctaBook} onClick={() => navigate('/book')}><img src={`${import.meta.env.BASE_URL}assets/play.svg`} alt="play" />See my dreams!</button>
        </section>

        {/* 星星動畫 */}
        <section className={styles.starAni}>
          <div className={styles.starAll}></div>
        </section>


        {/* Quest 區塊 */}
        <section className={styles.quest}>
          <h2>QUEST</h2>
          <div className="quest-box">
            <img src="/assets/bunny.svg" alt="bunny" className="bunny" />
            <div className="quest-card">
              <p>Weekly Quest!</p>
              <p>Note down things that make you curious!</p>
              <button>Check it out</button>
            </div>
          </div>
        </section>

        {/* Dream Journal 區塊 */}
        <section className="journal">
          <h2>Dream Journal</h2>
          <p>Let's fly back to the dream together!</p>
          <div className="journal-cards">
            <div className="card green">Genuine Dreams</div>
            <div className="card gray">Explore Yourself</div>
            <div className="card gray">Symbol Decoding</div>
          </div>
          <button>Let's go!</button>
        </section>

        {/* About Us 區塊 */}
        <section className="about">
          <h2>About Us</h2>
          <div className="carousel">
            {/* 留空：之後做輪播元件 */}
          </div>
        </section>
      </div>

    </>
  );
}
