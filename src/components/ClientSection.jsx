import React from 'react';
import styles from './ClientSection.module.css';

const ClientSection = () => {
    const points = [
        {
            number: '01',
            title: '採用基準を高めに設定し、\n選りすぐりの人材',
            text: '建設系派遣事業で経験し蓄積した採用ノウハウで選考・採用基準を設定しております。入社時の選考基準が高いからこそ、低い退職率と高い定着率を維持しています。面談時は人柄を重視し、この人材なら現場で活躍できると胸を張って言える人材を採用しています。'
        },
        {
            number: '02',
            title: '1年で正社員へ',
            text: '「派遣人材を一時的な労働力として抱える」のではなく、将来の中核人財を見据えた採用次世代の自社人材として育成。1年間の派遣期間を経て、正社員としての登用が可能です。'
        },
        {
            number: '03',
            title: '若年・未経験人財の育成',
            text: 'これまでの人財派遣事業で蓄積された若手・未経験層の育成支援と定着支援のノウハウを活かし、現場の定着率を高めます。定期的なフォローを行い、人として、社会人としての成長を支援します。'
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.enTitle}>CLIENT</span>
                    <h2 className={styles.jpTitle}>企業のご担当者様へ</h2>
                </div>
                <div className={styles.grid}>
                    {points.map((point, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.number}>{point.number}</span>
                            <h3 className={styles.cardTitle}>
                                {point.title.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i < point.title.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </h3>
                            <p className={styles.cardText}>{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientSection;
