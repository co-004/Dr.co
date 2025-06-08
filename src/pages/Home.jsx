// src/pages/Home.jsx
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../../scss/Home.module.scss";
const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero 區塊 */}
      <section className={styles.hero}>
        
        <div className={styles.heroLogo}>
        <img src={`${import.meta.env.BASE_URL}assets/logo-word.svg`} alt="DreamaBit Logo" />
        <img className={styles.heroAni} src={`${import.meta.env.BASE_URL}assets/babybit-1.svg`} alt="DreamaBit baby" />
        </div>
        <button className={styles.ctaBook}><img src={`${import.meta.env.BASE_URL}assets/btn-play1.svg`} alt="play" /></button>
      </section>

      {/* 星星動畫 */}
      <section className={styles.starAni}>
        <div className={styles.starAll}></div>
      </section>


      {/* Quest 區塊 */}
      <section className="quest">
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
  );
};

export default Home;
