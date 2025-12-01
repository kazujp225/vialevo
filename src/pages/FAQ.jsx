import React, { useEffect } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>よくある質問</h1>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>採用について</h2>

                <div className={styles.faqItem}>
                    <h3 className={styles.question}>未経験でも応募できますか？</h3>
                    <div className={styles.answer}>
                        <p>はい、可能です。当社では充実した研修制度を用意しており、未経験からでもプロの施工管理技士を目指せる環境が整っています。</p>
                    </div>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.question}>選考フローを教えてください。</h3>
                    <div className={styles.answer}>
                        <p>エントリー後、書類選考、面接（1〜2回）、内定という流れになります。最短で2週間程度で内定をお出しすることも可能です。</p>
                    </div>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.question}>配属先はどのように決まりますか？</h3>
                    <div className={styles.answer}>
                        <p>ご本人の希望や適性、通勤時間を考慮して決定します。無理な転勤はありませんのでご安心ください。</p>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>会社について</h2>

                <div className={styles.faqItem}>
                    <h3 className={styles.question}>平均年齢はどのくらいですか？</h3>
                    <div className={styles.answer}>
                        <p>20代から30代が中心に活躍しており、活気のある職場です。ベテラン社員も在籍しており、バランスの取れた組織です。</p>
                    </div>
                </div>

                <div className={styles.faqItem}>
                    <h3 className={styles.question}>女性も活躍できますか？</h3>
                    <div className={styles.answer}>
                        <p>はい、多くの女性社員が活躍しています。産休・育休制度も整っており、ライフイベントに合わせて長く働ける環境です。</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
