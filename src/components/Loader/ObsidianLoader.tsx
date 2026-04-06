"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './ObsidianLoader.module.css';

interface ObsidianLoaderProps {
    onComplete: () => void;
}

const NODES = [
    { id: 0, x: 20, y: 80 },
    { id: 1, x: 20, y: 50 },
    { id: 2, x: 20, y: 20 },

    { id: 3, x: 35, y: 35 },
    { id: 4, x: 50, y: 50 },
    { id: 5, x: 65, y: 65 },

    { id: 6, x: 80, y: 80 },
    { id: 7, x: 80, y: 50 },
    { id: 8, x: 80, y: 20 },
];

const EDGES = [
    [0, 1], [1, 2],
    [2, 3], [3, 4], [4, 5], [5, 6],
    [6, 7], [7, 8]
];

const ObsidianLoader: React.FC<ObsidianLoaderProps> = ({ onComplete }) => {
    const container = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useGSAP(() => {
        // Reveal nodes one by one
        gsap.from('.graph-node', {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(2)",
            transformOrigin: 'center center'
        });

        // Draw lines after nodes pop
        gsap.from('.graph-edge', {
            strokeDasharray: 200,
            strokeDashoffset: 200,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.inOut",
            delay: 0.5
        });

        // Wiggle effect
        gsap.to('.graph-node', {
            x: "random(-2, 2)",
            y: "random(-2, 2)",
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: 1
        });

        // Pulse text
        gsap.to('.loading-text', {
            opacity: 0.5,
            duration: 0.8,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

        // Fade and zoom out complete
        gsap.to(container.current, {
            scale: 1.5,
            opacity: 0,
            duration: 0.8,
            ease: "power4.in",
            delay: 3.5,
            onComplete: onComplete
        });

    }, { scope: container });

    return (
        <div className={styles.loaderContainer} ref={container}>
            <div className={styles.graphWrapper}>
                <svg ref={svgRef} viewBox="0 0 100 100" className={styles.svgGraph}>
                    {EDGES.map((edge, i) => {
                        const n1 = NODES[edge[0]];
                        const n2 = NODES[edge[1]];
                        return (
                            <line
                                key={`edge-${i}`}
                                className={`graph-edge ${styles.edgeLine}`}
                                x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
                            />
                        )
                    })}
                    {NODES.map((n) => (
                        <circle
                            key={`node-${n.id}`}
                            className={`graph-node ${styles.nodePoint}`}
                            cx={n.x} cy={n.y} r={1.5}
                        />
                    ))}
                </svg>
            </div>
            <div className={`loading-text ${styles.loadingText}`}>// ESTABLISHING NEURAL TOPOLOGY...</div>
        </div>
    );
};

export default ObsidianLoader;
