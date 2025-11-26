import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationHub.module.css';

const NavigationHub = () => {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* 1 Page to Understand - Large Item */}
                    <Link to="/company" className={`${styles.card} ${styles.cardLarge} ${styles.cardOnePage}`}>
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
                    </Link>

                    {/* Company - Medium Item */}
                    <div className={`${styles.card} ${styles.cardMedium} ${styles.cardCompany}`} id="company">
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/modern_architecture_bg_1764064438484.png"
                                alt="Company"
                                className={styles.bgImage}
                            />
                            <div className={styles.overlayBlue}></div>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.subLabel}>Company</p>
                            <h3 className={styles.subTitle}>会社を知る</h3>
                            <ul className={styles.linkList}>
                                <li><Link to="/company">アックスの軌跡</Link></li>
                                <li><Link to="/company">企業理念</Link></li>
                                <li><Link to="/company">会社概要</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Job - Medium Item */}
                    <div className={`${styles.card} ${styles.cardMedium} ${styles.cardJob}`} id="job">
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/hero_construction_site_1764064402898.png"
                                alt="Job"
                                className={styles.bgImage}
                            />
                            <div className={styles.overlayOrange}></div>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.subLabel}>Job</p>
                            <h3 className={styles.subTitle}>仕事を知る</h3>
                            <ul className={styles.linkList}>
                                <li><Link to="/job">技術職（施工管理）</Link></li>
                                <li><Link to="/job">営業・採用・総務</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* People - Medium Item */}
                    <div className={`${styles.card} ${styles.cardMedium} ${styles.cardPeople}`} id="people">
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/happy_workers_1764064421458.png"
                                alt="People"
                                className={styles.bgImage}
                            />
                            <div className={styles.overlayDark}></div>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.subLabel}>People</p>
                            <h3 className={styles.subTitle}>人を知る</h3>
                            <ul className={styles.linkList}>
                                <li><Link to="/people">社長・副社長紹介</Link></li>
                                <li><Link to="/people">創業メンバー紹介</Link></li>
                                <li><Link to="/people">営業マン対談</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavigationHub;
