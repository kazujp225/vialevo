import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GlobalCTA.module.css';

const GlobalCTA = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.label}>全員面接、3,000名採用！</p>
                    <h2 className={styles.title}>
                        あなたの可能性を、<br />
                        Vialevoで試してみませんか？
                    </h2>
                    <p className={styles.description}>
                        経験者も未経験者も、やる気のある方を歓迎します。<br />
                        まずは一度、お話ししましょう。
                    </p>
                    <div className={styles.buttons}>
                        <Link to="/entry" className={`${styles.btn} ${styles.btnPrimary}`}>応募する</Link>
                        <Link to="/recruit" className={`${styles.btn} ${styles.btnSecondary}`}>募集要項を見る</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalCTA;
