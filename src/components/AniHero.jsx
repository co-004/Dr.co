// 首頁CTA自動換圖類逐格動畫元件 
import React, { useState, useEffect } from 'react';
import styles from "../../scss/Home.module.scss"

function AniHero() {
    // 目前圖片第幾張-監控
    const [currentFrame, setCurrentFrame] = useState(0);
    // 是否暫停圖片-hover控制
    const [isHovered, setIsHovered] = useState(false);
    // 自動換圖
    useEffect(()=> {
        if (isHovered) return; //圖片暫停就不執行以下效果
        const timer = setInterval(()=>{  //間隔多久做什麼
            setCurrentFrame((prev)=>(prev+1)%15); //第15張就重新
        }, 100); //每100毫秒換下一張
        return () => clearInterval(timer); //確保計時能每次從零開始
    }, [isHovered]) //當isHovered此變數有改變就執行

    // 與btn同步
    return (
        <>
                <img 
        src={`${import.meta.env.BASE_URL}assets/babybit-${currentFrame+1}.svg`} 
        alt="Dreambaby" 
        className={`${styles.heroAni} ${isHovered?styles.hover:''}`}
        onClick={() => navigate('/book')}
        />
                  <button 
                  className={styles.ctaHero} 
                  onClick={() => navigate('/book')}
                  
        onMouseEnter={()=>setIsHovered(true)} //hover就暫停
        onMouseLeave={()=>setIsHovered(false)} //hover結束
                  >
                    <img 
                    src={`${import.meta.env.BASE_URL}assets/play.svg`}
                    alt="play" />
                    See my dreams!
                  </button>
        </>
    );
}

export default AniHero;
