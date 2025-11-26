import React from 'react';
import styles from './LineCTA.module.css';

const LineCTA = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>LINE</span>
                    </div>
                    <div className={styles.textWrapper}>
                        <h2 className={styles.title}>
                            <span className={styles.sub}>不安なことは</span><br />
                            LINEで聞いてね
                        </h2>
                        <p className={styles.description}>
                            採用担当者が直接お答えします。<br />
                            お気軽にご連絡ください。
                        </p>
                    </div>
                    <a href="#" className={styles.btn}>LINEで質問する</a>
                </div>
            </div>
        </section>
    );
};

export default LineCTA;
