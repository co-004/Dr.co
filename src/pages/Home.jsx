// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../scss/Home.module.scss";
import AniHero from "../components/AniHero";

const slides = [
  {
    title: 'Built from a Single Spark',
    content: 'It started with a question. It grew into a portal. Welcome to where dreams and waking life collide.',
  },
  {
    title: 'Unlock Hidden Worlds',
    content: 'Dreams are more than stories — they are maps. Step inside and find your way back to yourself.',
  },
  {
    title: 'Your Journey, Your Space',
    content: 'No judgment. No rush. Just a quiet place to dream, explore, and become.',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1); // 統一使用 slideIndex
  // 修正輪播功能
  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

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
            <div className={styles.logoDreamaBit}>DreamaBit</div>
          <div className={styles.heroLogo}>
            <AniHero 
            />
          </div>
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
              <button className={styles.ctaMain} onClick={() => navigate('/quest')}>
                <img src={`${import.meta.env.BASE_URL}assets/play.svg`} alt="play" />
                Check it out!
              </button>
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
            <div className={styles.journalCard}>
              <div className={styles.journalIcon}>
                <img className={styles.myBit} src={`${import.meta.env.BASE_URL}assets/jabit-1.svg`} alt="baby" />
              </div>
              <span>Decode Dreams</span>
              <p> • Unlock hidden symbols<br />
                • Hear your subconscious</p>
            </div>
            <div className={styles.journalCard}>
              <div className={styles.journalIcon}>
                <img className={styles.myBit} src={`${import.meta.env.BASE_URL}assets/jabit-2.svg`} alt="baby" />
              </div>
              <span>Explore Inner Worlds</span>
              <p> • Trace shifting scenes<br />
                • Catch fading memories</p>
            </div>
            <div className={styles.journalCard}>
              <div className={styles.journalIcon}>
                <img className={styles.myBit} src={`${import.meta.env.BASE_URL}assets/jabit-3.svg`} alt="baby" />
              </div>
              <span>Ignite Imagination</span>
              <p> • Awaken creativity<br />
                • Deepen self-awareness</p>
            </div>
          </div>
          <button className={styles.ctaMain} onClick={() => navigate('/journal')}>
            <img src={`${import.meta.env.BASE_URL}assets/play.svg`} alt="play" />
            Let's go!
          </button>
        </section>

        {/* 一顆雨動畫 */}
        <section className={styles.aniSection}>
          <div className={styles.rain}></div>
        </section>

        {/* About Us 區塊 */}
        <section className={styles.about}>
          <h2>ABOUT US</h2>
          <div className={styles.carousel}>
            <button className={styles.nav} onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="80" viewBox="0 0 72 80" fill="none">
                <g filter="url(#filter0_d_767_311)">
                  <path d="M48.6667 16.6668V23.3335H45.3334V26.6668H42V30.0002H38.6667V33.3335H35.3334V36.6668H32V43.3335H35.3334V46.6668H38.6667V50.0002H42V53.3335H45.3334V56.6668H48.6667V63.3335H45.3334V66.6668H38.6667V63.3335H35.3334V60.0002H32V56.6668H28.6667V53.3335H25.3334V50.0002H22V46.6668H18.6667V43.3335H15.3334V36.6668H18.6667V33.3335H22V30.0002H25.3334V26.6668H28.6667V23.3335H32V20.0002H35.3334V16.6668H38.6667V13.3335H45.3334V16.6668H48.6667Z" fill="#2E2E2E" />
                  <path d="M45.8334 12.8335V16.1665H49.1664V23.8335H45.8334V27.1665H42.5004V30.5005H39.1664V33.8335H35.8334V37.1665H32.5004V42.8335H35.8334V46.1665H39.1664V49.5005H42.5004V52.8335H45.8334V56.1665H49.1664V63.8335H45.8334V67.1665H38.1664V63.8335H34.8334V60.5005H31.5004V57.1665H28.1664V53.8335H24.8334V50.5005H21.5004V47.1665H18.1664V43.8335H14.8334V36.1665H18.1664V32.8335H21.5004V29.5005H24.8334V26.1665H28.1664V22.8335H31.5004V19.5005H34.8334V16.1665H38.1664V12.8335H45.8334Z" stroke="#FAF9F7" />
                </g>
                <defs>
                  <filter id="filter0_d_767_311" x="13.3334" y="11.3335" width="41.3334" height="61.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_767_311" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_767_311" result="shape" />
                  </filter>
                </defs>
              </svg>
            </button>

            <div className={styles.card}>
              <h3>{slides[slideIndex].title}</h3>
              <p>{slides[slideIndex].content}</p>
              <button className={styles.ctaMain} onClick={() => navigate('/login')}>
                <img src={`${import.meta.env.BASE_URL}assets/play.svg`} alt="play" />
                Sign up now!
              </button>
            </div>

            <button className={styles.nav} onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <g filter="url(#filter0_d_767_307)">
                  <path d="M23.3333 63.3335V56.6668H26.6666V53.3335H29.9999V50.0002H33.3333V46.6668H36.6666V43.3335H39.9999V36.6668H36.6666V33.3335H33.3333V30.0002H29.9999V26.6668H26.6666V23.3335H23.3333V16.6668H26.6666V13.3335H33.3333V16.6668H36.6666V20.0002H39.9999V23.3335H43.3333V26.6668H46.6666V30.0002H49.9999V33.3335H53.3333V36.6668H56.6666V43.3335H53.3333V46.6668H49.9999V50.0002H46.6666V53.3335H43.3333V56.6668H39.9999V60.0002H36.6666V63.3335H33.3333V66.6668H26.6666V63.3335H23.3333Z" fill="#2E2E2E" />
                  <path d="M33.8333 12.8335V16.1665H37.1663V19.5005H40.5002V22.8335H43.8333V26.1665H47.1663V29.5005H50.5002V32.8335H53.8333V36.1665H57.1663V43.8335H53.8333V47.1665H50.5002V50.5005H47.1663V53.8335H43.8333V57.1665H40.5002V60.5005H37.1663V63.8335H33.8333V67.1665H26.1663V63.8335H22.8333V56.1665H26.1663V52.8335H29.5002V49.5005H32.8333V46.1665H36.1663V42.8335H39.5002V37.1665H36.1663V33.8335H32.8333V30.5005H29.5002V27.1665H26.1663V23.8335H22.8333V16.1665H26.1663V12.8335H33.8333Z" stroke="#FAF9F7" />
                </g>
                <defs>
                  <filter id="filter0_d_767_307" x="21.3333" y="11.3335" width="41.3333" height="61.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_767_307" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_767_307" result="shape" />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>

          <div className={styles.dots}>
            {slides.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === slideIndex ? styles.active : ''}`}
                onClick={() => setSlideIndex(i)}
              />
            ))}
          </div>
        </section>
        {/* 一顆雨動畫 */}
                <section className={styles.aniSection}>
          <div className={styles.bubble}></div>
        </section>

      </div>
    </>
  );
}