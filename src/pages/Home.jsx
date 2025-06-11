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
            <div className={styles.logoDreamaBit}>DreamaBit</div>
            {/* <img src={`${import.meta.env.BASE_URL}assets/logo-word.svg`} alt="DreamaBit Logo" /> */}
            <img className={styles.heroAni} src={`${import.meta.env.BASE_URL}babybit-0.svg`} alt="DreamaBit baby" />
          </div>


          <button className={styles.ctaMain} onClick={() => navigate('/book')}><img src={`${import.meta.env.BASE_URL}assets/play.svg`} alt="play" />See my dreams!</button>
        </section>

        {/* 星星動畫 */}
        <section className={styles.aniSection}>
          <div className={styles.starAll}></div>
        </section>


        {/* Quest 區塊 */}
        <section className={styles.quest}>
          <h2>QUEST</h2>
          <div className={styles.questBox}>
          <img className={styles.questBunny} src={`${import.meta.env.BASE_URL}assets/a-6.svg`} alt="bunny" />
            <div className={styles.questCard}>
              <h4>Weekly Quest：</h4>
              <p>Name three things that make you contented！</p>
          <button className={styles.ctaMain} onClick={() => navigate('/quest')}><img src={`${import.meta.env.BASE_URL}assets/play.svg`} alt="play" />Check it out!</button>

            </div>
          </div>
        </section>

        {/* 雨滴動畫 */}
        <section className={styles.aniSection}>
          <div className={styles.rainAll}></div>
        </section>
        {/* Dream Journal 區塊 */}
        <section className={styles.journal}>
          <h2>JOURNAL</h2>
          <p>Let's fly back to the dream together!</p>
          <div className={styles.journalCards}>
            <div className="card green">Genuine Dreams</div>
            <div className="card gray">Explore Yourself</div>
            <div className="card gray">Symbol Decoding</div>
          </div>
          <button className={styles.ctaMain} onClick={() => navigate('/journal')}><img src={`${import.meta.env.BASE_URL}assets/play.svg`} alt="play" />Let's go!</button>

      
        </section>

        {/* About Us 區塊 */}
        <section className="about">
          <h2>ABOUT US</h2>
          <div className="carousel">
            {/* 留空：之後做輪播元件 */}
          </div>
        </section>
      </div>

    </>
  );
}
