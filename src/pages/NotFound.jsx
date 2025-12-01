import React, { useEffect } from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.errorCode}>404</div>
            <h1 className={styles.title}>ページが見つかりません</h1>
            <p className={styles.message}>
                お探しのページは削除されたか、名前が変更されたか、<br />
                一時的に利用できない可能性があります。
            </p>
            <a href="/" className={styles.homeBtn}>トップページへ戻る</a>
        </div>
    );
};

export default NotFound;
