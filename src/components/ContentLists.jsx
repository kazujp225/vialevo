import React from 'react';
import styles from './ContentLists.module.css';

const ContentLists = () => {
    const columns = [
        { id: 1, title: '建設業界の未来を切り拓くDXの可能性', date: '2025.11.15', category: 'Industry' },
        { id: 2, title: '未経験から施工管理へ。キャリアチェンジ成功の秘訣', date: '2025.11.10', category: 'Career' },
        { id: 3, title: '現場の安全を守るために私たちができること', date: '2025.11.05', category: 'Safety' },
    ];

    const news = [
        { id: 1, title: '年末年始休業のお知らせ', date: '2025.11.20' },
        { id: 2, title: '2026年度新卒採用のエントリー受付を開始しました', date: '2025.11.01' },
        { id: 3, title: '本社移転のお知らせ', date: '2025.10.15' },
        { id: 4, title: '「健康経営優良法人2025」に認定されました', date: '2025.10.01' },
    ];

    const blog = {
        id: 1,
        title: '入社3年目、初めての現場監督を任されて感じたこと',
        date: '2025.11.18',
        author: '工事部 田中',
        image: '/assets/happy_workers_1764064421458.png' // Reusing image
    };

    return (
        <div className={styles.wrapper}>
            {/* Columns Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.sectionTitle}>Column</h2>
                        <p className={styles.sectionSubtitle}>Vialevoのコラム</p>
                    </div>
                    <div className={styles.columnGrid}>
                        {columns.map(col => (
                            <a key={col.id} href="#" className={styles.columnCard}>
                                <div className={styles.columnImage}></div>
                                <div className={styles.columnContent}>
                                    <span className={styles.category}>{col.category}</span>
                                    <time className={styles.date}>{col.date}</time>
                                    <h3 className={styles.columnTitle}>{col.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className={styles.btnWrapper}>
                        <a href="#" className={styles.btn}>一覧へ</a>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className={`${styles.section} ${styles.bgGray}`}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.sectionTitle}>News</h2>
                        <p className={styles.sectionSubtitle}>お知らせ</p>
                    </div>
                    <ul className={styles.newsList}>
                        {news.map(item => (
                            <li key={item.id} className={styles.newsItem}>
                                <a href="#" className={styles.newsLink}>
                                    <time className={styles.newsDate}>{item.date}</time>
                                    <p className={styles.newsTitle}>{item.title}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.btnWrapper}>
                        <a href="#" className={styles.btn}>お知らせ一覧へ</a>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.sectionTitle}>Blog</h2>
                        <p className={styles.sectionSubtitle}>社員ブログ</p>
                    </div>
                    <div className={styles.blogWrapper}>
                        <a href="#" className={styles.blogCard}>
                            <div className={styles.blogImageWrapper}>
                                <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                            </div>
                            <div className={styles.blogContent}>
                                <div className={styles.blogMeta}>
                                    <time>{blog.date}</time>
                                    <span>{blog.author}</span>
                                </div>
                                <h3 className={styles.blogTitle}>{blog.title}</h3>
                                <p className={styles.blogExcerpt}>
                                    建設現場での毎日は新しい発見の連続です。先日、担当している現場で...
                                </p>
                                <span className={styles.readMore}>Read More</span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.btnWrapper}>
                        <a href="#" className={styles.btn}>社員ブログ一覧へ</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContentLists;
