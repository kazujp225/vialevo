import React, { useEffect, useState } from 'react';
import styles from './HeroVariant4.module.css';

const HeroVariant4 = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
            const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
            setOffset({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={styles.hero}>
            <div
                className={styles.layer}
                style={{
                    transform: `translate(${offset.x * 20}px, ${offset.y * 20}px) scale(1.1)`
                }}
            >
                <img
                    src="/assets/hero_construction_site_1764064402898.png"
                    alt="Background"
                    className={styles.bgImage}
                />
            </div>

            <div
                className={styles.layer}
                style={{
                    transform: `translate(${offset.x * -10}px, ${offset.y * -10}px)`
                }}
            >
                <div className={styles.shape1}></div>
            </div>

            <div
                className={styles.layer}
                style={{
                    transform: `translate(${offset.x * -30}px, ${offset.y * -30}px)`
                }}
            >
                <h1 className={styles.title}>
                    VIA<br />LE<br />VO
                </h1>
            </div>

            <div
                className={styles.layer}
                style={{
                    transform: `translate(${offset.x * -50}px, ${offset.y * -50}px)`
                }}
            >
                <p className={styles.subtitle}>
                    Constructing the Extraordinary
                </p>
            </div>
        </section>
    );
};

export default HeroVariant4;
