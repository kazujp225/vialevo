import React from 'react';
import PageHeader from '../components/PageHeader';
import GlobalCTA from '../components/GlobalCTA';
import ForConsidering from '../components/ForConsidering';
import LineCTA from '../components/LineCTA';
import styles from './Job.module.css';

const Job = () => {
    return (
        <div className="page-job">
            <PageHeader
                title="仕事を知る"
                subtitle="JOB"
                breadcrumb={[{ label: '仕事を知る' }]}
                bgImage="/assets/hero_construction_site_1764064402898.png"
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.jobCard}>
                        <div className={styles.imageWrapper}>
                            <img src="/assets/hero_construction_site_1764064402898.png" alt="Construction Management" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.jobTitle}>技術職（施工管理）</h2>
                            <p className={styles.jobDesc}>
                                建設プロジェクトの司令塔として、品質・工程・安全・原価の4大管理を行います。<br />
                                未経験からでも充実した研修制度でプロフェッショナルを目指せます。
                            </p>
                            <ul className={styles.featureList}>
                                <li>大型プロジェクト多数</li>
                                <li>資格取得支援あり</li>
                                <li>キャリアアップ制度充実</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.jobCard} ${styles.reverse}`}>
                        <div className={styles.imageWrapper}>
                            <img src="/assets/modern_architecture_bg_1764064438484.png" alt="Office Work" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.jobTitle}>営業・採用・総務</h2>
                            <p className={styles.jobDesc}>
                                技術者をサポートし、会社の成長を支えるバックオフィス業務です。<br />
                                採用活動や営業活動を通じて、建設業界の人材不足解消に貢献します。
                            </p>
                            <ul className={styles.featureList}>
                                <li>土日祝休み</li>
                                <li>残業少なめ</li>
                                <li>オフィスカジュアルOK</li>
                            </ul>
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

export default Job;
