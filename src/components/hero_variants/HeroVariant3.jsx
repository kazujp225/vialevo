import React from 'react';
import styles from './HeroVariant3.module.css';

const HeroVariant3 = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.grid}>
                <div className={`${styles.gridItem} ${styles.item1}`}>
                    <img src="/assets/hero_construction_site_1764064402898.png" alt="Construction" />
                    <div className={styles.caption}>
                        <h3>Precision</h3>
                        <p>Every detail matters.</p>
                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.item2}`}>
                    <div className={styles.textContent}>
                        <h1>VIA<br />LE<br />VO</h1>
                        <p className={styles.tagline}>Architecting Tomorrow.</p>
                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.item3}`}>
                    <img src="/assets/modern_architecture_bg_1764064438484.png" alt="Architecture" />
                    <div className={styles.caption}>
                        <h3>Vision</h3>
                        <p>Seeing beyond the horizon.</p>
                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.item4}`}>
                    <img src="/assets/happy_workers_1764064421458.png" alt="Team" />
                    <div className={styles.caption}>
                        <h3>People</h3>
                        <p>Our greatest asset.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroVariant3;
