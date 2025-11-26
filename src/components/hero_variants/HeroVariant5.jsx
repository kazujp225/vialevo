import React from 'react';
import styles from './HeroVariant5.module.css';

const HeroVariant5 = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <h1 className={styles.text}>VIA</h1>
                </div>
                <div className={styles.row}>
                    <h1 className={`${styles.text} ${styles.outline}`}>LE</h1>
                </div>
                <div className={styles.row}>
                    <h1 className={styles.text}>VO</h1>
                </div>
            </div>
            <div className={styles.bgVideo}>
                <img
                    src="/assets/hero_construction_site_1764064402898.png"
                    alt="Background"
                    className={styles.bgImage}
                />
            </div>
            <div className={styles.overlay}></div>
        </section>
    );
};

export default HeroVariant5;
