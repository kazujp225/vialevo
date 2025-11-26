import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#000',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: '"Arial Black", "Impact", sans-serif'
        }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: 0
            }}>
                <img
                    src="/assets/hero_construction_site_1764064402898.png"
                    alt="Construction Site"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(30%) contrast(1.1) brightness(0.6)'
                    }}
                />
                {/* Mesh Pattern Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    backgroundImage: 'radial-gradient(rgba(0,0,0,0) 2px, rgba(0,0,0,0.4) 2px)',
                    backgroundSize: '4px 4px',
                    zIndex: 1
                }}></div>
            </div>

            {/* Main Content Card */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderTop: '4px solid #F4D03F', /* Safety Yellow */
                padding: '4rem 6rem',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                maxWidth: '90%'
            }}>
                <div style={{
                    color: '#F4D03F', /* Safety Yellow */
                    fontSize: '1.2rem',
                    letterSpacing: '0.3em',
                    marginBottom: '1.5rem',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    <span style={{ display: 'block', width: '40px', height: '2px', background: '#F4D03F' }}></span>
                    NEXT LEVEL CONSTRUCTION
                    <span style={{ display: 'block', width: '40px', height: '2px', background: '#F4D03F' }}></span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    color: '#fff',
                    margin: 0,
                    lineHeight: 0.9,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    textShadow: '0 4px 10px rgba(0,0,0,0.5)'
                }}>
                    Build<br />
                    <span style={{ color: '#fff', WebkitTextStroke: '2px #F4D03F' }}>Stronger.</span>
                </h1>

                <p style={{
                    color: '#ddd',
                    fontFamily: 'sans-serif',
                    marginTop: '2rem',
                    maxWidth: '500px',
                    lineHeight: 1.6,
                    fontSize: '1.1rem',
                    fontWeight: '500'
                }}>
                    建設業界に特化したプロフェッショナル派遣。<br />
                    確かな技術と信頼で、日本の未来を築く。
                </p>

                <Link to="/entry/" style={{
                    display: 'inline-block',
                    marginTop: '3rem',
                    background: '#F4D03F',
                    color: '#000',
                    textDecoration: 'none',
                    border: 'none',
                    padding: '1rem 4rem',
                    fontSize: '1.2rem',
                    fontWeight: '900',
                    fontFamily: 'sans-serif',
                    cursor: 'pointer',
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(244, 208, 63, 0.3)'
                }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 208, 63, 0.5)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(244, 208, 63, 0.3)';
                    }}
                >
                    お問い合わせ
                </Link>
            </div>
        </div>
    );
};

export default Hero;
