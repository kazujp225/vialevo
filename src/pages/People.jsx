import React from 'react';
import PageHeader from '../components/PageHeader';
import GlobalCTA from '../components/GlobalCTA';
import ForConsidering from '../components/ForConsidering';
import LineCTA from '../components/LineCTA';
import styles from './People.module.css';

const People = () => {
    return (
        <div className="page-people">
            <PageHeader
                title="人を知る"
                subtitle="PEOPLE"
                breadcrumb={[{ label: '人を知る' }]}
                bgImage="/assets/happy_workers_1764064421458.png"
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* President & VP */}
                        <div className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                {/* Ideally use real images here */}
                                <span>LEADERS</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.tag}>LEADERS</span>
                                <h2 className={styles.cardTitle}>社長・副社長紹介</h2>
                                <p className={styles.cardDesc}>
                                    Vialevoを率いるトップ2人が語る、<br />
                                    会社の未来と求める人物像。
                                </p>
                                <span className={styles.readMore}>インタビューを読む →</span>
                            </div>
                        </div>

                        {/* Founding Members */}
                        <div className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                <span>FOUNDERS</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.tag}>FOUNDERS</span>
                                <h2 className={styles.cardTitle}>創業メンバー紹介</h2>
                                <p className={styles.cardDesc}>
                                    ゼロから会社を作り上げた<br />
                                    熱い想いを持ったメンバーたち。
                                </p>
                                <span className={styles.readMore}>インタビューを読む →</span>
                            </div>
                        </div>

                        {/* Sales Talk */}
                        <div className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                <span>SALES</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.tag}>SALES</span>
                                <h2 className={styles.cardTitle}>営業マン対談</h2>
                                <p className={styles.cardDesc}>
                                    最前線で活躍する営業マンが語る、<br />
                                    仕事のやりがいと厳しさ。
                                </p>
                                <span className={styles.readMore}>対談を読む →</span>
                            </div>
                        </div>

                        {/* Construction Staff */}
                        <div className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                <span>STAFF</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.tag}>STAFF</span>
                                <h2 className={styles.cardTitle}>施工管理で働く人たち</h2>
                                <p className={styles.cardDesc}>
                                    現場で活躍する先輩社員の<br />
                                    リアルな声をお届けします。
                                </p>
                                <span className={styles.readMore}>インタビューを読む →</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GlobalCTA />
            <ForConsidering />
            <LineCTA />
        </div>
    );
};

export default People;
