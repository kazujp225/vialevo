import React from 'react';
import styles from './AboutGroups.module.css';

const AboutGroups = () => {
    const groups = [
        {
            id: 'company',
            title: '会社を知る',
            enTitle: 'Company',
            image: '/assets/modern_architecture_bg_1764064438484.png',
            links: ['企業理念', '会社概要', '技術者データ', '社内制度・福利厚生']
        },
        {
            id: 'job',
            title: '仕事を知る',
            enTitle: 'Job',
            image: '/assets/hero_construction_site_1764064402898.png',
            links: ['技術職（施工管理）', '営業・採用・総務', '看護師・医師']
        },

    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>About Us</h2>
                    <p className={styles.sectionSubtitle}>Vialevoを知る</p>
                </div>

                <div className={styles.grid}>
                    {groups.map((group) => (
                        <div key={group.id} className={styles.card} id={group.id}>
                            <div className={styles.imageWrapper}>
                                <img src={group.image} alt={group.title} className={styles.image} />
                                <div className={styles.overlay}>
                                    <p className={styles.enTitle}>{group.enTitle}</p>
                                    <h3 className={styles.cardTitle}>{group.title}</h3>
                                </div>
                            </div>
                            <ul className={styles.linkList}>
                                {group.links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className={styles.link}>{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutGroups;
