import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <a href="/contact">お問い合わせ</a>
                    <a href="/faq">よくある質問</a>
                    <a href="/privacy">プライバシーポリシー</a>
                    <a href="/terms">利用規約</a>
                    <a href="/sitemap">サイトマップ</a>
                </div>
                <p className={styles.company}>株式会社 Vialevo</p>
                <p className={styles.copyright}>&copy; 2024 Vialevo Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
