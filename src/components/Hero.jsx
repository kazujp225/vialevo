import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100dvh', // Fix height to viewport
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#fff',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: '"Arial Black", "Impact", sans-serif'
            }}
        >


            <style>{`
                .scroll-indicator {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: #000;
                    opacity: 0.8;
                    animation: bounce 2s infinite;
                }
                .scroll-text {
                    font-size: 0.8rem;
                    letter-spacing: 0.2em;
                    margin-bottom: 10px;
                    font-weight: 300;
                }
                .scroll-line {
                    width: 1px;
                    height: 50px;
                    background: linear-gradient(to bottom, #000, rgba(0,0,0,0));
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateX(-50%) translateY(0);}
                    40% {transform: translateX(-50%) translateY(-10px);}
                    60% {transform: translateX(-50%) translateY(-5px);}
                }

                @media (max-width: 768px) {
                    .hero-wrapper {
                        height: 100dvh !important;
                        margin-top: 0 !important;
                        width: 100% !important;
                        position: absolute !important;
                        top: 0;
                        left: 0;
                    }
                    .hero-image {
                        height: 100% !important;
                        width: 100% !important;
                        object-fit: cover !important;
                        max-height: none !important;
                    }
                }
            `}</style>

            {/* Main Image Wrapper */}
            <div className="hero-wrapper" style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1
            }}>
                <picture style={{
                    display: 'block',
                    width: '100%',
                    height: '100%'
                }}>
                    <source media="(max-width: 768px)" srcSet="/assets/FVMBILE.jpg" />
                    <img
                        className="hero-image"
                        src="/assets/FV.jpg"
                        alt="Construction Site"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </picture>
            </div>



            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <span className="scroll-text">SCROLL</span>
                <div className="scroll-line"></div>
            </div>
        </div>
    );
};

export default Hero;
