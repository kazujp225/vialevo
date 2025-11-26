import React from 'react';

const PagePlaceholder = ({ title }) => {
    return (
        <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-primary)' }}>{title}</h1>
            <p>このページは現在準備中です。</p>
            <a href="/" style={{ display: 'inline-block', marginTop: '30px', color: 'var(--color-primary)', textDecoration: 'underline' }}>トップページへ戻る</a>
        </div>
    );
};

export default PagePlaceholder;
