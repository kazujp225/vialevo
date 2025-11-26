import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import GlobalCTA from '../components/GlobalCTA';
import ForConsidering from '../components/ForConsidering';
import LineCTA from '../components/LineCTA';
import styles from './Recruit.module.css';

const Recruit = () => {
    return (
        <div className="page-recruit">
            <PageHeader
                title="募集要項"
                subtitle="RECRUIT"
                breadcrumb={[{ label: '募集要項' }]}
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.jobList}>
                        {/* Construction Management */}
                        <div className={styles.jobCard}>
                            <div className={styles.jobHeader}>
                                <span className={styles.jobType}>正社員</span>
                                <h2 className={styles.jobTitle}>施工管理</h2>
                            </div>
                            <div className={styles.jobBody}>
                                <dl className={styles.jobMeta}>
                                    <div className={styles.metaRow}>
                                        <dt>勤務地</dt>
                                        <dd>全国（希望を考慮）</dd>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <dt>給与</dt>
                                        <dd>月給 30万円〜</dd>
                                    </div>
                                </dl>
                                <p className={styles.jobExcerpt}>
                                    未経験からでも手に職をつけて安定して働きたい方。
                                    充実した研修制度で、プロの施工管理技士を目指せます。
                                </p>
                                <Link to="/entry" className={styles.applyBtn}>この職種に応募する</Link>
                            </div>
                        </div>

                        {/* Sales / HR */}
                        <div className={styles.jobCard}>
                            <div className={styles.jobHeader}>
                                <span className={styles.jobType}>正社員</span>
                                <h2 className={styles.jobTitle}>営業・採用</h2>
                            </div>
                            <div className={styles.jobBody}>
                                <dl className={styles.jobMeta}>
                                    <div className={styles.metaRow}>
                                        <dt>勤務地</dt>
                                        <dd>本社（東京都港区）</dd>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <dt>給与</dt>
                                        <dd>月給 28万円〜</dd>
                                    </div>
                                </dl>
                                <p className={styles.jobExcerpt}>
                                    会社の成長を支える営業・採用担当。
                                    人とのコミュニケーションが得意な方を歓迎します。
                                </p>
                                <Link to="/entry" className={styles.applyBtn}>この職種に応募する</Link>
                            </div>
                        </div>

                        {/* Office Support */}
                        <div className={styles.jobCard}>
                            <div className={styles.jobHeader}>
                                <span className={`${styles.jobType} ${styles.typePartTime}`}>アルバイト</span>
                                <h2 className={styles.jobTitle}>営業サポート・事務</h2>
                            </div>
                            <div className={styles.jobBody}>
                                <dl className={styles.jobMeta}>
                                    <div className={styles.metaRow}>
                                        <dt>勤務地</dt>
                                        <dd>本社（東京都港区）</dd>
                                    </div>
                                    <div className={styles.metaRow}>
                                        <dt>給与</dt>
                                        <dd>時給 1,500円〜</dd>
                                    </div>
                                </dl>
                                <p className={styles.jobExcerpt}>
                                    営業や採用チームのサポート業務。
                                    週3日〜、時短勤務も相談可能です。
                                </p>
                                <Link to="/entry" className={styles.applyBtn}>この職種に応募する</Link>
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

export default Recruit;
