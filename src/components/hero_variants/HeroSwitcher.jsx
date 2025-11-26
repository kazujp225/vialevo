import React, { useState } from 'react';
import HeroVariant1 from './HeroVariant1';
import HeroVariant2 from './HeroVariant2';
import HeroVariant3 from './HeroVariant3';
import HeroVariant4 from './HeroVariant4';
import HeroVariant5 from './HeroVariant5';
import styles from './HeroSwitcher.module.css';

const HeroSwitcher = () => {
    const [activeVariant, setActiveVariant] = useState(1);

    const renderVariant = () => {
        switch (activeVariant) {
            case 1: return <HeroVariant1 />;
            case 2: return <HeroVariant2 />;
            case 3: return <HeroVariant3 />;
            case 4: return <HeroVariant4 />;
            case 5: return <HeroVariant5 />;
            default: return <HeroVariant1 />;
        }
    };

    return (
        <div className={styles.wrapper}>
            {renderVariant()}

            <div className={styles.switcher}>
                <p className={styles.label}>Select Design:</p>
                <div className={styles.buttons}>
                    <button
                        className={`${styles.btn} ${activeVariant === 1 ? styles.active : ''}`}
                        onClick={() => setActiveVariant(1)}
                    >
                        1. Cinematic
                    </button>
                    <button
                        className={`${styles.btn} ${activeVariant === 2 ? styles.active : ''}`}
                        onClick={() => setActiveVariant(2)}
                    >
                        2. Diagonal
                    </button>
                    <button
                        className={`${styles.btn} ${activeVariant === 3 ? styles.active : ''}`}
                        onClick={() => setActiveVariant(3)}
                    >
                        3. Grid
                    </button>
                    <button
                        className={`${styles.btn} ${activeVariant === 4 ? styles.active : ''}`}
                        onClick={() => setActiveVariant(4)}
                    >
                        4. Parallax
                    </button>
                    <button
                        className={`${styles.btn} ${activeVariant === 5 ? styles.active : ''}`}
                        onClick={() => setActiveVariant(5)}
                    >
                        5. Kinetic
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSwitcher;
