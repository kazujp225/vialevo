import React from 'react';
import styles from './Message.module.css';

const Message = () => {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    確かな技術と<br />
                    信頼の絆
                </h2>

                <p className={styles.text}>
                    建設現場という厳しい環境の中で、<br />
                    日々、安全と品質を守り抜く皆様の姿勢に、<br />
                    私たちは深く感銘を受けています。
                </p>

                <p className={styles.text}>
                    皆様一人ひとりの力が、<br />
                    街を作り、未来を作り、人々の暮らしを支えています。<br />
                    その誇り高き仕事に、心からの敬意を表します。
                </p>

                <div className={styles.signature}>
                    <span className={styles.signatureTitle}>代表取締役社長</span>
                    <span className={styles.signatureName}>加藤 眞史</span>
                </div>
            </div>
        </section>
    );
};

export default Message;
