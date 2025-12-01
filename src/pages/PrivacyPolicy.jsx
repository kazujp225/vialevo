import React, { useEffect } from 'react';
import styles from './PrivacyPolicy.module.css';
import PageHeader from '../components/PageHeader';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>プライバシーポリシー</h1>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>1. 個人情報の収集について</h2>
                <div className={styles.content}>
                    <p>
                        当社は、お問い合わせや採用応募などの際に、お名前、メールアドレス、電話番号などの個人情報をご提供いただく場合がございます。
                        これらの個人情報は、ご提供いただく際の目的以外では利用いたしません。
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>2. 個人情報の利用目的</h2>
                <div className={styles.content}>
                    <p>お預かりした個人情報は、以下の目的で利用いたします。</p>
                    <ul>
                        <li>お問い合わせへの回答やご連絡のため</li>
                        <li>採用選考および採用に関するご連絡のため</li>
                        <li>当社のサービス向上や業務改善のため</li>
                    </ul>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>3. 個人情報の第三者への開示・提供</h2>
                <div className={styles.content}>
                    <p>
                        当社は、お預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                    </p>
                    <ul>
                        <li>ご本人の同意がある場合</li>
                        <li>法令に基づき開示することが必要である場合</li>
                        <li>人の生命、身体または財産の保護のために必要がある場合</li>
                    </ul>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>4. 個人情報の管理</h2>
                <div className={styles.content}>
                    <p>
                        当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>5. お問い合わせ窓口</h2>
                <div className={styles.content}>
                    <p>
                        本ポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
