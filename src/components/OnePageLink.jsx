import React from 'react';
import styles from './OnePageLink.module.css';

const OnePageLink = () => {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <a href="/aboutus/" className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/assets/modern_architecture_bg_1764064438484.png"
                            alt="Background"
                            className={styles.bgImage}
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.label}>About Us</p>
                        <h2 className={styles.title}>
                            1ページでわかる<br />
                            Vialevo
                        </h2>
                        <p className={styles.description}>
                            創業の精神から未来へのビジョンまで。<br />
                            私たちのすべてを凝縮しました。
                        </p>
                        <span className={styles.arrow}>→</span>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default OnePageLink;
