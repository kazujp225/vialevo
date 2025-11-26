import React, { useState } from 'react';
import styles from './HeroVariant2.module.css';

const HeroVariant2 = () => {
    const [hoverSide, setHoverSide] = useState(null); // 'left', 'right', or null

    return (
        <section className={styles.hero}>
            <div
                className={`${styles.side} ${styles.left} ${hoverSide === 'left' ? styles.expanded : ''} ${hoverSide === 'right' ? styles.shrunk : ''}`}
                onMouseEnter={() => setHoverSide('left')}
                onMouseLeave={() => setHoverSide(null)}
            >
                <div className={styles.content}>
                    <h2 className={styles.heading}>Design</h2>
                    <p className={styles.desc}>Innovative Architecture</p>
                </div>
                <div className={styles.overlay}></div>
            </div>

            <div
                className={`${styles.side} ${styles.right} ${hoverSide === 'right' ? styles.expanded : ''} ${hoverSide === 'left' ? styles.shrunk : ''}`}
                onMouseEnter={() => setHoverSide('right')}
                onMouseLeave={() => setHoverSide(null)}
            >
                <div className={styles.bgImageWrapper}>
                    <img
                        src="/assets/modern_architecture_bg_1764064438484.png"
                        alt="Architecture"
                        className={styles.bgImage}
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Build</h2>
                    <p className={styles.desc}>Solid Construction</p>
                </div>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.centerTitle}>
                <h1>VIA LE VO</h1>
            </div>
        </section>
    );
};

export default HeroVariant2;
