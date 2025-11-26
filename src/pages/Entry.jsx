import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './Entry.module.css';

const Entry = () => {
    return (
        <div className="page-entry">
            <PageHeader
                title="エントリー"
                subtitle="ENTRY"
                breadcrumb={[{ label: 'エントリー' }]}
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.intro}>
                        <p>
                            事前に確認しておきたいことがある場合は公式LINEからご連絡ください。<br />
                            採用担当が直接お答えします。
                        </p>
                        <a href="#" className={styles.lineBtn}>公式LINEで質問する</a>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>お名前 <span className={styles.required}>必須</span></label>
                            <input type="text" className={styles.input} placeholder="山田 太郎" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>メールアドレス <span className={styles.required}>必須</span></label>
                            <input type="email" className={styles.input} placeholder="example@vialevo.co.jp" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>電話番号 <span className={styles.required}>必須</span></label>
                            <input type="tel" className={styles.input} placeholder="090-1234-5678" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>希望職種 <span className={styles.required}>必須</span></label>
                            <select className={styles.select} required>
                                <option value="">選択してください</option>
                                <option value="construction">施工管理</option>
                                <option value="sales">営業・採用</option>
                                <option value="office">営業サポート・事務</option>
                                <option value="other">その他</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>備考</label>
                            <textarea className={styles.textarea} rows="5" placeholder="質問や希望があればご記入ください"></textarea>
                        </div>

                        <div className={styles.submitWrapper}>
                            <p className={styles.privacy}>
                                <a href="#">プライバシーポリシー</a>に同意の上、送信してください。
                            </p>
                            <button type="submit" className={styles.submitBtn}>送信する</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Entry;
