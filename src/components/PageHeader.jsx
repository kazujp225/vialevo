import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageHeader.module.css';

const PageHeader = ({ title, subtitle, bgImage, breadcrumb }) => {
    return (
        <section className={styles.header}>
            <div className={styles.bgWrapper}>
                <img
                    src={bgImage || "/assets/modern_architecture_bg_1764064438484.png"}
                    alt="Header Background"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link to="/">ホーム</Link>
                    {breadcrumb && breadcrumb.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className={styles.separator}>&gt;</span>
                            {item.link ? (
                                <Link to={item.link}>{item.label}</Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                <div className={styles.content}>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <h1 className={styles.title}>{title}</h1>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
