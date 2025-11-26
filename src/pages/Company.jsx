import React from 'react';
import PageHeader from '../components/PageHeader';
import GlobalCTA from '../components/GlobalCTA';
import ForConsidering from '../components/ForConsidering';
import LineCTA from '../components/LineCTA';
import styles from './Company.module.css';

const Company = () => {
    return (
        <div className="page-company">
            <PageHeader
                title="会社を知る"
                subtitle="COMPANY"
                breadcrumb={[{ label: '会社を知る' }]}
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.philosophy}>
                        <h2 className={styles.sectionTitle}>企業理念</h2>
                        <p className={styles.philosophyText}>
                            社員が進化し、<br />
                            企業を成長させ、<br />
                            業界を変革したい。
                        </p>
                        <p className={styles.philosophyDesc}>
                            私たちは、建設業界の未来を担う人材を育成し、<br />
                            技術と信頼で社会に貢献します。
                        </p>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.bgGray}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>会社概要</h2>
                    <dl className={styles.companyTable}>
                        <div className={styles.row}>
                            <dt>会社名</dt>
                            <dd>株式会社Vialevo</dd>
                        </div>
                        <div className={styles.row}>
                            <dt>代表者</dt>
                            <dd>代表取締役社長　加藤 眞史</dd>
                        </div>
                        <div className={styles.row}>
                            <dt>資本金</dt>
                            <dd>3000万円</dd>
                        </div>
                        <div className={styles.row}>
                            <dt>事業内容</dt>
                            <dd>
                                （１）建設工事に関する施工管理業務の受託及びコンサルティング<br />
                                （２）労働者派遣事業法に基づく労働者派遣事業<br />
                                （３）職業安定法に基づく有料職業紹介事業<br />
                                （４）施工管理技術者等に対する採用支援、適性評価及び教育研修並びにeラーニングの企画、開発及び運営<br />
                                （５）建設分野における業務請負、アウトソーシング及びBPO（ビジネス・プロセス・アウトソーシング）の受託<br />
                                （６）インターネットを利用した求人情報サイトの運営並びに広告業及び広告代理店業<br />
                                （７）前各号に附帯関連する一切の事業
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>

            <GlobalCTA />
            <ForConsidering />
            <LineCTA />
        </div>
    );
};

export default Company;
