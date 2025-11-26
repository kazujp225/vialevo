import React from 'react';
import styles from './ForConsidering.module.css';

const ForConsidering = () => {
    const links = [
        { title: '他社との違い', url: '#' },
        { title: '応募〜面接の流れ', url: '#' },
        { title: 'よくある質問', url: '#' },
        { title: '応募方法', url: '#' },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>ご検討中の方へ</h2>
                <div className={styles.grid}>
                    {links.map((link, index) => (
                        <a key={index} href={link.url} className={styles.card}>
                            <span className={styles.cardTitle}>{link.title}</span>
                            <span className={styles.arrow}>→</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForConsidering;
