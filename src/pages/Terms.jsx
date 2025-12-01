import React, { useEffect } from 'react';
import styles from './Terms.module.css';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>利用規約</h1>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>1. はじめに</h2>
                <div className={styles.content}>
                    <p>
                        この利用規約（以下、「本規約」といいます。）は、当社が提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
                        ご利用の皆様（以下、「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>2. 適用</h2>
                <div className={styles.content}>
                    <p>
                        本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>3. 禁止事項</h2>
                <div className={styles.content}>
                    <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                    <ul>
                        <li>法令または公序良俗に違反する行為</li>
                        <li>犯罪行為に関連する行為</li>
                        <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                        <li>当社のサービスの運営を妨害するおそれのある行為</li>
                        <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                        <li>不正アクセスをし、またはこれを試みる行為</li>
                    </ul>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>4. 本サービスの提供の停止等</h2>
                <div className={styles.content}>
                    <p>
                        当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                    </p>
                    <ul>
                        <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                        <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                        <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                    </ul>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>5. 免責事項</h2>
                <div className={styles.content}>
                    <p>
                        当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。
                        当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>6. 利用規約の変更</h2>
                <div className={styles.content}>
                    <p>
                        当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                        なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
