import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
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
            }}
        >
            {/* Background Image Container */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: 0
            }}>
                {/* Base Dark Image */}
                <img
                    src="/assets/FV.jpg"
                    alt="Construction Site Dark"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(30%) contrast(1.1) brightness(0.6)',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />

                {/* Spotlight Bright Image */}
                <img
                    src="/assets/FV.jpg"
                    alt="Construction Site Bright"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(0%) contrast(1.2) brightness(1.1)', // Brighter and more colorful
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 80%)`,
                        WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 80%)`,
                        pointerEvents: 'none', // Pass events through to underlying elements if needed
                        transition: 'mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out' // Smooth movement
                    }}
                />

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
