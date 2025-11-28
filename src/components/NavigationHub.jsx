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

                    {/* Client - Large Item spanning 2 columns */}
                    <div className={`${styles.card} ${styles.cardClient}`} id="client">
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/happy_workers_1764064421458.png"
                                alt="Client"
                                className={styles.bgImage}
                            />
                            <div className={styles.overlayDark}></div>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.subLabel}>CLIENT</p>
                            <h3 className={styles.subTitle}>企業のご担当者様へ</h3>
                            <div className={styles.clientContent}>
                                <div className={styles.clientItem}>
                                    <h4>❶ 採用基準を高めに設定し、選りすぐりの人材</h4>
                                    <p>建設系派遣事業で経験し蓄積した採用ノウハウで選考・採用基準を設定しております。入社時の選考基準が高いからこそ、低い退職率と高い定着率を維持しています。<br />
                                        面談時は人柄を重視し、この人材なら現場で活躍できると胸を張って言える人材を採用しています。</p>
                                </div>
                                <div className={styles.clientItem}>
                                    <h4>❷ 1年で正社員へ</h4>
                                    <p>「派遣人材を一時的な労働力として抱える」のではなく、将来の中核人財を見据えた採用次世代の自社人材として育成。<br />
                                        1年間の派遣期間を経て、正社員としての登用が可能です。</p>
                                </div>
                                <div className={styles.clientItem}>
                                    <h4>❸ 若年・未経験人財の育成</h4>
                                    <p>これまでの人財派遣事業で蓄積された若手・未経験層の育成支援と定着支援のノウハウを活かし、現場の定着率を高めます。<br />
                                        定期的にフォローさせて頂くことにより、人として社会人としても成長できるようバックアップして参ります。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavigationHub;
