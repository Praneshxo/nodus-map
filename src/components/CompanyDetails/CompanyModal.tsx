"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, MapPin, Users } from "lucide-react";
import { Company } from "../../types/company";
import styles from "./CompanyModal.module.css";

interface CompanyModalProps {
    company: Company | null;
    onClose: () => void;
}

export default function CompanyModal({ company, onClose }: CompanyModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (company && modalRef.current) {
            // Pop-in animation
            gsap.fromTo(
                modalRef.current,
                { scale: 0.9, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" }
            );
        }
    }, [company]);

    const handleClose = () => {
        if (modalRef.current) {
            gsap.to(modalRef.current, {
                scale: 0.9, opacity: 0, y: 20, duration: 0.3, ease: "power2.in",
                onComplete: onClose
            });
        } else {
            onClose();
        }
    };

    if (!company) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalCard} ref={modalRef}>
                <button className={styles.closeButton} onClick={handleClose}>
                    <X size={20} />
                </button>

                <div className={styles.header}>
                    <div className={styles.logoContainer} style={{ backgroundImage: `url(${company.logoUrl})`, backgroundSize: 'cover' }}></div>
                    <h2 className={styles.companyName}>{company.name}</h2>
                </div>

                <p className={styles.description}>{company.description}</p>

                <div className={styles.infoSection}>
                    <div className={styles.infoRow}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={18} />
                        </div>
                        <div className={styles.infoText}>
                            <span className={styles.infoLabel}>HEADQUARTERS</span>
                            <span className={styles.infoValue}>{company.headquarters}</span>
                        </div>
                    </div>

                    <div className={styles.infoRow}>
                        <div className={styles.iconWrapper}>
                            <Users size={18} />
                        </div>
                        <div className={styles.infoText}>
                            <span className={styles.infoLabel}>TEAM SIZE</span>
                            <span className={styles.infoValue}>{company.teamSize}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.actions}>
                    {company.website && (
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                            Visit Website
                        </a>
                    )}
                    {company.linkedin && (
                        <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                            LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
