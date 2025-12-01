import React, { useEffect } from 'react';
import styles from './Sitemap.module.css';

const Sitemap = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>サイトマップ</h1>

            <div className={styles.grid}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>メイン</h2>
                    <ul className={styles.list}>
                        <li><a href="/">ホーム</a></li>
                        <li><a href="/news">ニュース</a></li>
                        <li><a href="/contact">お問い合わせ</a></li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>企業情報</h2>
                    <ul className={styles.list}>
                        <li><a href="/company">会社概要</a></li>
                        <li><a href="/people">人を知る</a></li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>採用情報</h2>
                    <ul className={styles.list}>
                        <li><a href="/recruit">採用情報</a></li>
                        <li><a href="/job">仕事を知る</a></li>
                        <li><a href="/entry">エントリー</a></li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>その他</h2>
                    <ul className={styles.list}>
                        <li><a href="/privacy">プライバシーポリシー</a></li>
                        <li><a href="/terms">利用規約</a></li>
                        <li><a href="/sitemap">サイトマップ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
