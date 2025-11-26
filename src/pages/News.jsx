import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import GlobalCTA from '../components/GlobalCTA';
import ForConsidering from '../components/ForConsidering';
import LineCTA from '../components/LineCTA';
import styles from './News.module.css';

const newsData = [
    {
        id: 1,
        date: '2025.11.15',
        category: 'お知らせ',
        title: 'コーポレートサイトをリニューアルいたしました',
        link: '#'
    },
    {
        id: 2,
        date: '2025.11.01',
        category: '採用情報',
        title: '2026年度新卒採用のエントリー受付を開始しました',
        link: '#'
    },
    {
        id: 3,
        date: '2025.10.20',
        category: 'メディア',
        title: '建設業界紙「建通新聞」に当社の取り組みが掲載されました',
        link: '#'
    },
    {
        id: 4,
        date: '2025.10.05',
        category: 'お知らせ',
        title: '本社オフィスを移転いたしました',
        link: '#'
    },
    {
        id: 5,
        date: '2025.09.15',
        category: 'イベント',
        title: '「建設DX展」に出展いたします',
        link: '#'
    }
];

const News = () => {
    return (
        <div className="page-news">
            <PageHeader
                title="お知らせ"
                subtitle="NEWS"
                breadcrumb={[{ label: 'お知らせ' }]}
                bgImage="/assets/modern_architecture_bg_1764064438484.png"
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <ul className={styles.newsList}>
                        {newsData.map((item) => (
                            <li key={item.id} className={styles.newsItem}>
                                <Link to={item.link} className={styles.newsLink}>
                                    <div className={styles.newsMeta}>
                                        <time className={styles.newsDate}>{item.date}</time>
                                        <span className={styles.newsCategory}>{item.category}</span>
                                    </div>
                                    <h2 className={styles.newsTitle}>{item.title}</h2>
                                    <span className={styles.arrow}>→</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.pagination}>
                        <span className={`${styles.pageNumber} ${styles.active}`}>1</span>
                        <a href="#" className={styles.pageNumber}>2</a>
                        <a href="#" className={styles.pageNumber}>3</a>
                    </div>
                </div>
            </section>

            <GlobalCTA />
            <ForConsidering />
            <LineCTA />
        </div>
    );
};

export default News;
