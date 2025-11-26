import React from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Our Pride</h2>
                <p className={styles.subtitle}>私たちの誇り</p>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src="/assets/happy_workers_1764064421458.png"
                    alt="Happy Workers"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <p className={styles.overlayText}>
                        笑顔と活気に満ちた現場。<br />
                        それが私たちの最高の成果です。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
