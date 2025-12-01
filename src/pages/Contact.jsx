import React, { useEffect } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>お問い合わせ</h1>

            <div className={styles.intro}>
                <p>
                    当社に関するご質問やご相談は、以下のフォームよりお気軽にお問い合わせください。<br />
                    内容を確認後、担当者よりご連絡させていただきます。
                </p>
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
                    <label className={styles.label}>電話番号</label>
                    <input type="tel" className={styles.input} placeholder="090-1234-5678" />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>お問い合わせ内容 <span className={styles.required}>必須</span></label>
                    <textarea className={styles.textarea} rows="6" placeholder="お問い合わせ内容をご記入ください" required></textarea>
                </div>

                <div className={styles.submitWrapper}>
                    <p className={styles.privacy}>
                        <a href="/privacy">プライバシーポリシー</a>に同意の上、送信してください。
                    </p>
                    <button type="submit" className={styles.submitBtn}>送信する</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
