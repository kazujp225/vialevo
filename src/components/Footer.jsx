import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.company}>株式会社 Vialevo</p>
                <p className={styles.copyright}>&copy; 2024 Vialevo Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
