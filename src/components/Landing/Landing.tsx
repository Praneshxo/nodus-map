"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import styles from './Landing.module.css';

const Landing: React.FC = () => {
    const router = useRouter();
    const container = useRef<HTMLDivElement>(null);

    const handleExplore = () => {
        router.push('/map');
    };

    useGSAP(() => {
        gsap.from('.stagger-text', {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2,
        });

        gsap.from('.fade-logo', {
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.8,
        });

        gsap.from('.fade-nav', {
            y: -20,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
        });
    }, { scope: container });

    return (
        <div className={styles.container} ref={container}>
            <div className={styles.backgroundGrid} />

            <header className={`${styles.header} fade-nav`}>
                <div className={styles.logo}>
                    <img src="/nodus_logo_white.png" alt="Nodus" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <nav className={styles.nav}>
                    <span>Network</span>
                    <span>Engine</span>
                    <span>Coordinates</span>
                    <span>Intelligence</span>
                </nav>
                <button onClick={handleExplore} className={styles.exploreBtnTop}>Explore the Map</button>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.textWrapper}>
                    <div className={`${styles.labelsContainer} stagger-text`}>
                    </div>
                    <h1 className={`${styles.title} stagger-text`}>GEOMETRIC<br />CAREERS</h1>
                    <div className={`${styles.labelsContainerRight} stagger-text`}>
                    </div>

                    <p className={`${styles.description} stagger-text`}>
                        Stop scrolling lists. Start navigating coordinates. <span className={styles.highlight}>Nodus maps the</span>
                        <br />
                        professional ecosystem through proximity, density, and flow.
                    </p>

                    <div className={`${styles.ctaGroup} stagger-text`}>
                        <button className={styles.btnPrimary} onClick={handleExplore}>INITIALIZE SEARCH</button>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.iconContainer}>
                    <div className={`${styles.iconBox} stagger-text`}>
                        <div className={styles.icon}>in</div>
                        <p>PROFESSIONAL DEPTH</p>
                    </div>
                    <div className={`${styles.plus} stagger-text`}>+</div>
                    <div className={`${styles.iconBox} stagger-text`}>
                        <div className={styles.icon}>📍</div>
                        <p>SPATIAL AWARENESS</p>
                    </div>
                </div>

                <h2 className={`${styles.convergenceTitle} stagger-text`}>
                    THE CONVERGENCE OF<br />SOCIAL GRAPHS AND<br />GEOMETRIC DATA.
                </h2>

                <div className={styles.brands}>
                    {['AIRBNB', 'UBER', 'TESLA', 'SPACEX', 'OPENAI', 'PALANTIR', 'STRIPE'].map((brand) => (
                        <span key={brand} className={`${styles.brandText} fade-logo`}>{brand}</span>
                    ))}
                </div>

                <div className={styles.nodusSection}>
                    <div className={styles.radarCircle}>
                        <div className={styles.systemCore}>SYSTEM CORE</div>
                        <h1 className={`${styles.nodusTitle} stagger-text`}>NODUS</h1>
                        <p className={styles.processingText}>// PROCESSING SPATIAL INTELLIGENCE...</p>
                    </div>
                </div>

                <div className={styles.trajectorySection}>
                    <div className={styles.metroHub}>AVAILABLE FOR METRO HUB</div>
                    <h2 className={`${styles.trajectoryTitle} stagger-text`}>CHART YOUR<br />TRAJECTORY.</h2>
                    <button onClick={handleExplore} className={`${styles.exploreBtnBottom} stagger-text`}>Explore the Map</button>
                </div>

                <div className={styles.copyrightBar}>
                    <div>
                        <img src="/nodus_logo_white.png" alt="Nodus" className={styles.footerLogo} style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <div>© 2024 NODUS SPATIAL SYSTEMS. ALL COORDINATES RESERVED.</div>
                    <div className={styles.footerLinks}>
                        <span>DOCUMENTATION</span>
                        <span>PRIVACY</span>
                        <span>SPATIAL TERMS</span>
                        <span>API</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
