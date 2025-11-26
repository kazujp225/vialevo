import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div
            style={{
                width: '100%',
                height: 'auto', // Let image dictate height
                minHeight: '100dvh', // Ensure it covers screen if image is short (though likely image is tall enough)
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#000',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: '"Arial Black", "Impact", sans-serif'
            }}
        >
            {/* Main Image Wrapper */}
            <div style={{
                width: '100%',
                height: 'auto',
                position: 'relative',
                zIndex: 0
            }}>
                <picture style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto'
                }}>
                    <source media="(max-width: 768px)" srcSet="/assets/FVMBILE.jpg" />
                    <img
                        src="/assets/FV.jpg"
                        alt="Construction Site"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: 'auto', // Maintain aspect ratio
                            objectFit: 'contain'
                        }}
                    />
                </picture>

                {/* Mesh Pattern Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    backgroundImage: 'radial-gradient(rgba(0,0,0,0) 2px, rgba(0,0,0,0.4) 2px)',
                    backgroundSize: '4px 4px',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}></div>
            </div>
        </div>
    );
};

export default Hero;
