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
            {/* Blurred Background Layer */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: 0,
                overflow: 'hidden'
            }}>
                <picture style={{
                    width: '100%', height: '100%', display: 'block'
                }}>
                    <source media="(max-width: 768px)" srcSet="/assets/FVMBILE.jpg" />
                    <img
                        src="/assets/FV.jpg"
                        alt="Background"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'blur(20px) brightness(0.4)',
                            transform: 'scale(1.1)' // Prevent blur edges
                        }}
                    />
                </picture>
            </div>

            {/* Main Image Wrapper */}
            <div style={{
                width: '100%',
                height: 'auto',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 0 50px rgba(0,0,0,0.5)' // Subtle separation
            }}>
                <picture style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%'
                }}>
                    <source media="(max-width: 768px)" srcSet="/assets/FVMBILE.jpg" />
                    <img
                        src="/assets/FV.jpg"
                        alt="Construction Site"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: 'auto', // Maintain aspect ratio
                            objectFit: 'contain',
                            maxHeight: '100dvh' // Ensure it fits within viewport if needed
                        }}
                    />
                </picture>
            </div>
        </div>
    );
};

export default Hero;
