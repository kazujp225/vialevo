import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>Vialevo</Link>

                <nav className={`${styles.nav} ${styles.desktopNav}`}>
                    <ul className={styles.navList}>
                        <li><Link to="/company" className={styles.navLink}>会社を知る</Link></li>
                        <li><Link to="/job" className={styles.navLink}>仕事を知る</Link></li>
                        <li><Link to="/people" className={styles.navLink}>人を知る</Link></li>
                        <li><Link to="/news" className={styles.navLink}>お知らせ</Link></li>
                    </ul>
                    <div className={styles.ctaButtons}>
                        <Link to="/entry" className={`${styles.btn} ${styles.btnPrimary}`}>応募する</Link>
                        <Link to="/recruit" className={`${styles.btn} ${styles.btnSecondary}`}>募集要項</Link>
                    </div>
                </nav>

                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileNavList}>
                        <li><Link to="/company" className={styles.mobileNavLink}>会社を知る</Link></li>
                        <li><Link to="/job" className={styles.mobileNavLink}>仕事を知る</Link></li>
                        <li><Link to="/people" className={styles.mobileNavLink}>人を知る</Link></li>
                        <li><Link to="/news" className={styles.mobileNavLink}>お知らせ</Link></li>
                        <li><Link to="/recruit" className={styles.mobileNavLink}>募集要項</Link></li>
                        <li><Link to="/entry" className={`${styles.mobileBtn} ${styles.btnPrimary}`}>応募する</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
