import React, { useEffect, useState } from 'react';
import styles from './HeroVariant1.module.css';

const HeroVariant1 = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.bgWrapper}>
                <img
                    src="/assets/hero_construction_site_1764064402898.png"
                    className={`${styles.bgImage} ${loaded ? styles.loaded : ''}`}
                    alt="Construction Site"
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h1 className={`${styles.title} ${loaded ? styles.visible : ''}`}>
                    <span className={styles.line}>VIA</span>
                    <span className={styles.line}>LE</span>
                    <span className={styles.line}>VO</span>
                </h1>
                <p className={`${styles.subtitle} ${loaded ? styles.visible : ''}`}>
                    Building the Future, Today.
                </p>
                <div className={`${styles.scrollIndicator} ${loaded ? styles.visible : ''}`}>
                    <span>SCROLL</span>
                    <div className={styles.line}></div>
                </div>
            </div>
        </section>
    );
};

export default HeroVariant1;
