import React from 'react';
import styles from './Message.module.css';

const Message = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img
                        src="/assets/modern_architecture_bg_1764064438484.png"
                        alt="Modern Architecture"
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
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
                    <p className={styles.signature}>
                        代表取締役社長<br />
                        加藤 眞史
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Message;
