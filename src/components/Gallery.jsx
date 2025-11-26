import React, { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default to first panel active

    const items = [
        {
            id: 'teamwork',
            title: "Teamwork",
            jpTitle: "チームワーク",
            image: "/assets/happy_workers_1764064421458.png",
            description: "互いに支え合い、高め合う仲間たち。笑顔と活気に満ちた現場が、私たちの最大の強みです。"
        },
        {
            id: 'technology',
            title: "Technology",
            jpTitle: "技術力",
            image: "/assets/hero_construction_site_1764064402898.png",
            description: "最新の技術と長年の経験を融合。困難な課題も解決に導く、プロフェッショナルな技術力。"
        },
        {
            id: 'creation',
            title: "Creation",
            jpTitle: "創造",
            image: "/assets/modern_architecture_bg_1764064438484.png",
            description: "ただ建物を作るだけでなく、人々の暮らしと未来を創造する。それが私たちの使命です。"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Our Pride</h2>
                <p className={styles.subtitle}>私たちの誇り</p>
            </div>
            <div className={styles.container}>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`${styles.panel} ${activeIndex === index ? styles.active : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)} // For mobile touch support
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className={styles.image}
                        />

                        {/* Vertical Title (Visible when collapsed) */}
                        <div className={styles.verticalTitleWrapper}>
                            <span className={styles.verticalTitle}>{item.jpTitle}</span>
                        </div>

                        {/* Expanded Content (Visible when active) */}
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
